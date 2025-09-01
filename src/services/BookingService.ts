import BaseService from "./BaseService";

class BookingService extends BaseService {
    constructor() {
    super()
  }

  async bookWonderLab(details: any) {
    return this.handleRequest(this.AxiosInstance.post(`${this.path}/weekend-booking`, details))
  }
}

export default BookingService.getInstance()