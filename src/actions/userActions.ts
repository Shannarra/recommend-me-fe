import {IUserLoginProps} from "../types/userLoginProps";
import {USER_ACTION_CONSTANTS} from "../constants";

export const userLogin = (user: IUserLoginProps) => {
  return {
    type: USER_ACTION_CONSTANTS.LOGIN,
    payload: user
  }
}
