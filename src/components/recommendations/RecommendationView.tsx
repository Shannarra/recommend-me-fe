import {useLocation, Navigate, Link} from "react-router-dom";
import {sendRecommendationNow} from "../../store/actions/recommendationActions";
import {useDispatch, useSelector, useStore} from "react-redux"
import {IRootState} from "../../types/interfaces/state.interfaces";

export const RecommendationView = () => {
    const location= useLocation();
    const {user} = useSelector((state: IRootState) => state.user);
    const dispatch = useDispatch();

    if (!location?.state) {
        return <Navigate replace to='/'/>
    }

    const {recommendation} = location?.state;

    const handleSend = () => {
        sendRecommendationNow(dispatch, user.id, user.token, recommendation);
    }

    return (
        <div className="row">
            <Link to='/' className="btn btn-primary">🔙 To homepage</Link>
            <div className="col-3"></div>
            <div className="col-6">
                <h1 className="text-center">Details about recommendation №{recommendation.id}</h1>

                <div className="text-lg-start row">
                    <h2>Detailed information</h2>
                    <div className="col-md-6 p-1">
                        Created by <span className="text-muted">{recommendation.by} </span> &nbsp;
                        for <span className="text-muted">{recommendation.to}</span>.
                    </div>
                    <div className="col-md-6">
                        <h3>Additional information:</h3>
                        <p>
                            Comment: {recommendation.comment}
                        </p>

                        {
                            recommendation.time_sent === null ?
                                <>
                                    <p>
                                        <span className="text-danger">This item has not been sent yet.</span>
                                    </p>
                                    <button className="btn btn-success" onClick={() =>  {
                                        sendRecommendationNow(dispatch, user.id, user.token, recommendation)
                                    }}>Send now!</button>
                                </>
                                :
                                <>
                                    <span className="text-success">This item has been sent on {recommendation.time_sent}</span>
                                </>
                        }
                    </div>
                    </div>
                <p>{recommendation?.send_now}</p>
                <p>{recommendation?.by}</p>
                <p>{recommendation?.to}</p>
                <p>{recommendation?.cv.name}</p>
                <p>{recommendation?.cv.url}</p>
            </div>
            <div className="col-3"></div>
        </div>
    );

}
