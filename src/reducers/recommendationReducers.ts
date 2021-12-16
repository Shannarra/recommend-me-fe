import {
    LOCAL_STORAGE,
    RECOMMENDATIONS_LS_NAME,
    RECOMMENDATION_ACTION_CONSTANTS, USER_LS_NAME
} from "../constants";
import {get_all_recommendations_for_user} from "./requests/recommendationRequests";

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
