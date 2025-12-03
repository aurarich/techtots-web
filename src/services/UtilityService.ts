import { AxiosRequestConfig } from "axios";
import BaseService from "./BaseService";

class UtilityService extends BaseService {
  constructor() {
    super();
  }

  async makeComplaints(data:any, config?: AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.post(`${this.path}/contact-forms`, data, config))
  }

  async getGenders(config?:AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.get(`${this.path}/genders`, config));
  }

  async getTitles(config?:AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.get(`${this.path}/titles`, config));
  }

  async getRegions(config?:AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.get(`${this.path}/regions`, config));
  }

  async uploadFile(formData:FormData, config?:AxiosRequestConfig) {
    config = {...config,headers : {
        "Content-Type": "multipart/form-data",
        ...config?.headers
    }}
    return this.handleRequest(this.AxiosInstance.post(`${this.path}/upload`, formData, config));
  }
}

export default UtilityService.getInstance();
