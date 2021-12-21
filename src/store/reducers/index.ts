import {combineReducers} from "redux";
import {userReducer} from './userReducer';
import {recommendationsReducer} from "./recommendationsReducer";

export const user = combineReducers({
    user: userReducer,
    recommendations: recommendationsReducer
})
