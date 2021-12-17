import axios from "axios";
import {
    ALL_RECOMMENDATIONS_PATH,
    CREATE_RECOMMENDATION_PATH, JWT_LS_NAME,
    LOCAL_STORAGE,
    RECOMMENDATIONS_LS_NAME, USER_LS_NAME
} from "../../constants";
import {
    IUserRecommendationsProps,
    ICreateRecommendationProps
} from "../../types/recommendationProps";
import {unmountComponentAtNode} from "react-dom";
import {Navigate} from "react-router-dom";
import React from "react";


export const get_all_recommendations_for_user = (props: IUserRecommendationsProps) => {
    axios
        .get(
            `${ALL_RECOMMENDATIONS_PATH(props.userId)}/`,
            { headers: { Authorization: `Bearer ${props.userToken}`} }
            )
        .then(res => {
            LOCAL_STORAGE.write(RECOMMENDATIONS_LS_NAME, JSON.stringify({
                recommendations: res.data
            }))
        })
        .catch(e => console.error(e));
}

export const create_new_recommendation = (props: ICreateRecommendationProps) => {
    console.log(CREATE_RECOMMENDATION_PATH(props.user_id))
    const token = LOCAL_STORAGE.tryParseRead(JWT_LS_NAME).token;
    console.log(token);

    const formData = new FormData();
    formData.append("cv", props.cv );
    formData.append("by", props.by );
    formData.append("user_id", props.user_id.toString());

    if (props.comment)
        formData.append("comment", props.comment?.toString());
    if (props.send_now)
        formData.append("send_now", props.send_now?.toString());

    console.log(props)

    axios
        .post(`${CREATE_RECOMMENDATION_PATH(props.user_id)}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            if (res.status === 200) {
                window.location.replace("/")
            }
        })
        .catch(e => console.error(e));
}
