import {LOCAL_STORAGE, USER_ACTION_CONSTANTS, USER_LS_NAME} from "../constants";
import {log_in} from "./requests/userRequests";

let user = LOCAL_STORAGE.tryParseRead(USER_LS_NAME);
const initialState = user || {};

export const userLoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_ACTION_CONSTANTS.LOGIN: {
            log_in(action.payload);
            return LOCAL_STORAGE.tryParseRead(USER_LS_NAME);
        }
        default:
            return state;
    }
}

