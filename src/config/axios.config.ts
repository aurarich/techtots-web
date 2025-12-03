import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { StoreKeys } from '@/models/AuthModel'

const BASE_URL = 'https://api.techtots.edu.gh'
// const BASE_URL = 'http://localhost:3000'

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

let isRefreshing = false
let failedQueue: {
  resolve: (value: any) => void
  reject: (error: any) => void
}[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

// Attach access token before each request
AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(StoreKeys.ACCESS_TOKEN)
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Handle responses
AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean
    }

    // Only handle 401 errors and ensure we have original request config
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      // If already refreshing, queue this request
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`
            }
            return AxiosInstance(originalRequest)
          })
          .catch((err) => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      const refreshToken = localStorage.getItem(StoreKeys.REFRESH_TOKEN)

      if (!refreshToken) {
        processQueue(error, null)
        // clearAuthSession()
        isRefreshing = false
        return Promise.reject(error)
      }

      try {
        // Use a separate axios instance for refresh to avoid interceptor loops
        const refreshResponse = await axios.get(
          `${BASE_URL}/api/v1/auth/refresh`,
          {
            headers: {
              'Content-Type': 'application/json',
              // Or include in header if your API expects it there
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        )

        const { data } = refreshResponse

        // Save new tokens
        localStorage.setItem(StoreKeys.AUTH_TOKEN, JSON.stringify(data))
        localStorage.setItem(StoreKeys.ACCESS_TOKEN, data.accessToken)
        localStorage.setItem(StoreKeys.REFRESH_TOKEN, data.refreshToken)

        // Process queued requests with new token
        processQueue(null, data.accessToken)

        // Retry original request with new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
        }

        return AxiosInstance(originalRequest)
      } catch (refreshError) {
        // Process queue with error
        processQueue(refreshError, null)

        // Clear all tokens and end session
        localStorage.remove(StoreKeys.AUTH_TOKEN)
        localStorage.remove(StoreKeys.ACCESS_TOKEN)
        localStorage.remove(StoreKeys.REFRESH_TOKEN)
        // clearAuthSession()

        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default AxiosInstance
