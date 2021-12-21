import {IUserPureProps} from "../../types/interfaces/user.interfaces";
import {RecommendationsList} from "../recommendations/RecommendationsList";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../types/interfaces/state.interfaces";
import {getAllRecommendations} from "../../store/actions/recommendationActions";


export const AfterLogin = (props: { user: IUserPureProps, token: string}) => {
    const user = props.user;
    const dispatch = useDispatch();

    getAllRecommendations(dispatch, user.id, props.token);
    const recsStore = useSelector((state: IRootState) => state.user.recommendations);

    return (<>
        <h1 className="text-success">Hi, {user.fname} {user.lname} !</h1>
        <h2 className="text-muted">{user.email}</h2>


        <RecommendationsList recommendations={recsStore} />
    </>);
}
