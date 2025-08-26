import { AxiosRequestConfig } from "axios";
import BaseService from "./BaseService";

class TourService extends BaseService {
  constructor() {
    super();
  }

  async createRequest(data: any, config?:AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.post(`${this.path}/tour-request`, data, config));
  }
}

export default TourService.getInstance();
