import {RECOMMENDATION_ACTIONS} from "../../constants";

export const recommendationsReducer = (state = {recommendations: [], loading: true}, action: any) => {
    switch (action.type) {
        case RECOMMENDATION_ACTIONS.GET_ALL:
            return {
                recommendations: action.payload,
                loading: false,
                error: null
            }
        case RECOMMENDATION_ACTIONS.GET_ALL_ERR:
            return {
                recommendations: [],
                loading: false,
                error: {
                    message: 'Getting recommendations failed. Reason: ' + action.payload.message
                }
            }
        default:
            return state;
    }
}
