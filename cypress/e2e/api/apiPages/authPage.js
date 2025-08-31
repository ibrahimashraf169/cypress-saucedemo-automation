import { ApiHelper } from "../../../utils/apiHelper";
import { ENDPOINTS } from "../endpoints";

export class AuthPage {
  static login(email, password) {
    return ApiHelper.post(ENDPOINTS.AUTH.LOGIN, null, { email, password });
  }
}
