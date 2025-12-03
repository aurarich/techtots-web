import { AxiosRequestConfig } from "axios";
import BaseService from "./BaseService";

class AdmissionService extends BaseService {
    constructor() {
    super()
  }

  async apply(details: any, config?:AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.post(`${this.path}/admission/apply`, details, config))
  }
}

export default AdmissionService.getInstance()