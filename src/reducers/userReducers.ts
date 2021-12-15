import {LOCAL_STORAGE, USER_ACTION_CONSTANTS, USER_LS_NAME} from "../constants";
import {log_in} from "./requests/userRequests";

// @ts-ignore
let user = JSON.parse(window.localStorage.getItem('user'));
const initialState = user || {};

export const userLoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_ACTION_CONSTANTS.LOGIN: {
            log_in(action.payload);
            // @ts-ignore
            return JSON.parse(LOCAL_STORAGE.read(USER_LS_NAME));
        }
        default:
            return state;
    }
}

