import axios from "axios";
import {IUserLoginProps} from "../../types/interfaces/user.interfaces";
import {LOGIN_PATH} from "../request.constatns";
import {USER_ACTIONS} from "../user.constants";

export const loginUser = (dispatch: any, data: IUserLoginProps) => {
    axios.post(LOGIN_PATH, data)
        .then(res => {
            dispatch({type: USER_ACTIONS.LOGIN, payload: res.data})

            dispatch({type: USER_ACTIONS.LOGIN_JWT_RECEIVED, payload: res.data.token})
            //dispatch({type: USER_ACTIONS.LOGIN_JWT_RECEIVED, payload: res.data.token})
        })
        .catch(e => dispatch({type: USER_ACTIONS.LOGIN_ERR, payload: e}))
}
