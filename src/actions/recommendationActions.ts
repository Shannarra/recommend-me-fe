import {RECOMMENDATION_ACTION_CONSTANTS} from "../constants";
import {ICreateRecommendationProps, IUserRecommendationsProps} from "../types/recommendationProps";
import {IRecommendationProps} from "../components/recommendations/RecommendationsList";

export const getAllRecommendations = (props: IUserRecommendationsProps) => {
    return {
        type: RECOMMENDATION_ACTION_CONSTANTS.GET_ALL,
        payload: props
    }
}

export const sendRecommendation = (props: IRecommendationProps, user_id: number) => {
    return {
        type: RECOMMENDATION_ACTION_CONSTANTS.SEND_NOW,
        payload: {
            ...props,
            user_id
        }
    }
}
