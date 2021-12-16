import {RECOMMENDATION_ACTION_CONSTANTS} from "../constants";
import {IUserRecommendationsProps} from "../types/recommendationProps";

export const getAllRecommendations = (props: IUserRecommendationsProps) => {
    return {
        type: RECOMMENDATION_ACTION_CONSTANTS.GET_ALL,
        payload: props
    }
}
