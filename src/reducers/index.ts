import {combineReducers} from 'redux';
import {userLoginReducer} from "./userReducers";
import {recommendationsListReducer, sendRecommendationNowReducer} from "./recommendationReducers";
import {ICreateRecommendationProps} from "../types/recommendationProps";

export interface IRootState {
    userLogin: any;
    getAllRecommendations: [];
    sendRecommendation: ICreateRecommendationProps;
}

export const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    getAllRecommendations: recommendationsListReducer,
    sendRecommendation: sendRecommendationNowReducer
})
