import {IUserLoginProps} from "../../types/userLoginProps";
import axios from "axios";
import {LOCAL_STORAGE, LOGIN_PATH, USER_LS_NAME, USER_LOGIN_STATE, LOGIN_STATE, JWT_LS_NAME} from "../../constants";

export const log_in = (user: IUserLoginProps) => {
    axios
        .post(`${LOGIN_PATH}`, user)
        .then(res => {

            if (res.status === 200) {
                LOCAL_STORAGE.write(USER_LOGIN_STATE, JSON.stringify({
                    state: LOGIN_STATE.SUCCESS,
                    message: res.data.message,
                    statusCode: res.status,
                    statusMessage: res.statusText
                }))
                LOCAL_STORAGE.write(JWT_LS_NAME, JSON.stringify({token: res.data.token}))
                LOCAL_STORAGE.write(USER_LS_NAME, JSON.stringify(res.data.user));
            } else {
                LOCAL_STORAGE.write(USER_LOGIN_STATE, JSON.stringify({
                    state: LOGIN_STATE.FAILIURE,
                    message: res.data.message,
                    statusCode: res.status,
                    statusMessage: res.statusText
                }))

                console.error("STATUS ERR: " + res.statusText)
            }

        })
        .catch(e => console.error(e))
}
