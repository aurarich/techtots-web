import { AxiosRequestConfig } from "axios";
import BaseService from "./BaseService";

class ProfileService extends BaseService {
  constructor() {
    super();
  }

  async getUserProfile(config?:AxiosRequestConfig) {
    return this.handleRequest(this.AxiosInstance.get(`${this.path}/user/profile`, config));
  }

}

export default ProfileService.getInstance();
