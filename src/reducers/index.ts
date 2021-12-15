import {combineReducers} from 'redux';
import {userLoginReducer} from "./userReducers";

export interface IRootState {
    userLogin: any
}

export const rootReducer = combineReducers({
    userLogin: userLoginReducer
})
