import axios from "axios";
import {ALL_RECOMMENDATIONS_PATH, REQUEST_HEADERS} from "../request.constatns";
import {RECOMMENDATION_ACTIONS} from "../../constants";

export const getAllRecommendations = (dispatch: any, user_id: number, token: string) => {
    axios.get(ALL_RECOMMENDATIONS_PATH(user_id), {
            headers: {
                ...REQUEST_HEADERS.CONTENT_TYPE.JSON,
                ...REQUEST_HEADERS.JWT(token)
            }
        }).then(res => {
        dispatch({type: RECOMMENDATION_ACTIONS.GET_ALL, payload: res.data})
    }).catch(e => dispatch({type: RECOMMENDATION_ACTIONS.GET_ALL_ERR, payload: e}))
}
