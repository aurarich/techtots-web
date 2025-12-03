import {
  LoginModel,
  RegisterModel,
  OTPRequestType,
  ChangePasswordModel,
  ResetPasswordModel,
  LoginResponseModel,
  StoreKeys,
} from '@/models/AuthModel'
import BaseService from './BaseService'

class AuthService extends BaseService {
  private key = 'zUdiOMZD.1jbv@YNLPSHWONq'
  constructor() {
    super()
  }

  //SAVE AUTH TOKEN
  saveAuthToken(value: LoginResponseModel) {
    localStorage.setItem(StoreKeys.AUTH_TOKEN, JSON.stringify(value))
    localStorage.setItem(StoreKeys.ACCESS_TOKEN, value.accessToken)
    localStorage.setItem(StoreKeys.REFRESH_TOKEN, value.refreshToken)
  }

  clearAuthToken() {
    localStorage.removeItem(StoreKeys.AUTH_TOKEN)
    localStorage.removeItem(StoreKeys.ACCESS_TOKEN)
    localStorage.removeItem(StoreKeys.REFRESH_TOKEN)
  }

  getAuthToken() {
    const token = localStorage.getItem(StoreKeys.AUTH_TOKEN)
    return token ? JSON.parse(token) as LoginResponseModel : null
  }

  deleteToken() {
    return localStorage.removeItem(StoreKeys.AUTH_TOKEN)
  }

  clearTokens() {
    localStorage.clear()
  }

  async validateToken() {
    return this.handleRequest(this.AxiosInstance.get(`/auth/validate_token`))
  }

  async login(credentials: Omit<LoginModel, 'device_type' | 'device_id'>) {
    console.log(credentials)
    return this.handleRequest(
      this.AxiosInstance.post<LoginResponseModel>(
        `${this.path}/auth/login`,
        credentials
      )
    )
  }

  async register(data: RegisterModel) {
    return this.handleRequest(
      this.AxiosInstance.post(`${this.path}/register`, data)
    )
  }

  async generateOTP(requestType: OTPRequestType, phone: string) {
    return this.handleRequest(
      this.AxiosInstance.get(
        `${this.path}/generate_otp/${this.key}/${requestType}`,
        {
          params: {
            phone_number: phone,
          },
        }
      )
    )
  }

  async validateOTP(requestType: OTPRequestType, code: string, phone: string) {
    return this.handleRequest(
      this.AxiosInstance.get(`${this.path}/validate_otp/${requestType}`, {
        params: {
          code,
          phone_number: phone,
        },
      })
    )
  }

  async changePassword(data: ChangePasswordModel) {
    return this.handleRequest(
      this.AxiosInstance.put(`${this.path}/change_password`, data)
    )
  }

  async resetPassword(data: ResetPasswordModel) {
    return this.handleRequest(
      this.AxiosInstance.post(`${this.path}/forgot_password/reset`, data)
    )
  }

  async getForgotPasswordKey(mailOrPhone: string) {
    return this.handleRequest(
      this.AxiosInstance.get(`${this.path}/forgot_password/get_key`, {
        params: {
          email_or_phone: mailOrPhone,
        },
      })
    )
  }

  async validateForgotPasswordKey(code: string, mailOrPhone: string) {
    return this.handleRequest(
      this.AxiosInstance.get(`${this.path}/forgot_password/validate_key`, {
        params: {
          otp: code,
          email_or_phone: mailOrPhone,
        },
      })
    )
  }

  async deregister() {
    return this.handleRequest(
      this.AxiosInstance.delete(`${this.path}/deregister`)
    )
  }
}

export default AuthService.getInstance()
