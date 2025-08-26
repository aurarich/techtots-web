import { AxiosError } from "axios";
import AxiosInstance from "../config/axios.config";

export default class BaseService {
  protected path = "/api/v1";
  protected static instance: any;
  protected AxiosInstance = AxiosInstance;

  public static getInstance<T extends BaseService>(this: new () => T): T {
    if (!(this as any).instance) {
      (this as any).instance = new this();
    }
    return (this as any).instance;
  }

  protected async handleRequest<T>(request: Promise<T>): Promise<T> {
    try {
      return await request;
    } catch (error) {
      let err = error as AxiosError;
      if(err.response){
        err = {...err, detail: err.response.data} as AxiosError;
      }
      throw err;
    }
  }
}



