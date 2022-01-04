import axios from "axios";
import {ALL_RECOMMENDATIONS_PATH, REQUEST_HEADERS, SPECIFIC_RECOMMENDATION_PATH} from "../request.constatns";
import {RECOMMENDATION_ACTIONS} from "../../constants";
import {IRecommendationProps} from "../../types/interfaces/recommendation.interfaces";

export const getAllRecommendations = (dispatch: any, user_id: number, token: string) => {
    axios.get(ALL_RECOMMENDATIONS_PATH(user_id), {
            headers: {
                ...REQUEST_HEADERS.CONTENT_TYPE.JSON,
                ...REQUEST_HEADERS.JWT(token)
            }
        }).then(res => {
        dispatch({type: RECOMMENDATION_ACTIONS.GET_ALL, payload: res.data})
    }).catch(e => dispatch({type: RECOMMENDATION_ACTIONS.GET_ALL_ERR, payload: e}))
};

export const sendRecommendationNow = (dispatch: any, user_id: number, token: string, rec: IRecommendationProps) => {
    if (rec.send_now)
        return dispatch({type: RECOMMENDATION_ACTIONS.SEND_NOW_ERR, payload: new Error("Recommendation has already been sent.")})

    axios.put(SPECIFIC_RECOMMENDATION_PATH(user_id, rec.id), {
        ...rec,
        send_now: true
    }, {
        headers: {
            ...REQUEST_HEADERS.CONTENT_TYPE.JSON,
            ...REQUEST_HEADERS.JWT(token)
        }
    }).then(res => {
        dispatch({type: RECOMMENDATION_ACTIONS.SEND_NOW, payload: res.data})
    }).catch(e => dispatch({type: RECOMMENDATION_ACTIONS.SEND_NOW, payload: e}))
}


export const getSpecificRecommendation = (dispatch: any, user_id: number, token: string, rec_id: number) => {
    axios.get(SPECIFIC_RECOMMENDATION_PATH(user_id,  rec_id), {
        headers: {
            ...REQUEST_HEADERS.CONTENT_TYPE.JSON,
            ...REQUEST_HEADERS.JWT(token)
        }
    }).then(res => {
        console.log(`GOT DATA:`)
        console.log([res.data])
        dispatch({ type: RECOMMENDATION_ACTIONS.GET_SPECIFIC, payload: [res.data] })
    }).catch(e => dispatch({ type: RECOMMENDATION_ACTIONS.GET_SPECIFIC_ERR, payload: e.message}))
}
