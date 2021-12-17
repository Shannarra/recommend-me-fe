import {
    LOCAL_STORAGE,
    RECOMMENDATIONS_LS_NAME,
    RECOMMENDATION_ACTION_CONSTANTS
} from "../constants";
import {
    get_all_recommendations_for_user,
    send_recommendation_now
} from "./requests/recommendationRequests";
import {IUpdateRecommendationProps} from "../types/recommendationProps";

const recommendations = LOCAL_STORAGE.tryParseRead(RECOMMENDATIONS_LS_NAME)
const initialState = recommendations || [];

export const recommendationsListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case RECOMMENDATION_ACTION_CONSTANTS.GET_ALL: {
            get_all_recommendations_for_user(action.payload);
            return LOCAL_STORAGE.tryParseRead(RECOMMENDATIONS_LS_NAME);
        }
        default:
            return state;
    }
}

const initialUpdateRecommendation: IUpdateRecommendationProps = recommendations[0] || {};
export const sendRecommendationNowReducer = (state = initialUpdateRecommendation, action: any) => {
    switch (action.type) {
        case RECOMMENDATION_ACTION_CONSTANTS.SEND_NOW:{
            send_recommendation_now(action.payload);
            return state;
        }
        default:
            return state;
    }
}
