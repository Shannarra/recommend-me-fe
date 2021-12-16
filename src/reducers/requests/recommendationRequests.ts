import axios from "axios";
import {ALL_RECOMMENDATIONS_PATH, LOCAL_STORAGE, RECOMMENDATIONS_LS_NAME} from "../../constants";
import {IUserRecommendationsProps} from "../../types/recommendationProps";


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
