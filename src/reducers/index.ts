import {combineReducers} from 'redux';
import {userLoginReducer} from "./userReducers";
import {recommendationsListReducer} from "./recommendationReducers";

export interface IRootState {
    userLogin: any;
    getAllRecommendations: [];
}

export const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    getAllRecommendations: recommendationsListReducer
})
