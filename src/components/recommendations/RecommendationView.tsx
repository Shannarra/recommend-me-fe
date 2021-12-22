import {useLocation, Navigate} from "react-router-dom";
import {IRecommendationProps} from "../../types/interfaces/recommendation.interfaces";

export const RecommendationView = () => {
    const location= useLocation();

    if (!location?.state) {
        return <Navigate replace to='/'/>
    }

    const {recommendation} = location?.state;

    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <h1 className="text-center">Details about recommendation №{recommendation.id}</h1>

                <div className="text-lg-start col-6 row">
                    <h2>Detailed information</h2>
                    <div className="p-2 m-2 col-6">
                        Created by <span className="text-muted">{recommendation.by} </span> &nbsp;
                        for <span className="text-muted">{recommendation.to}</span>.
                    </div>
                    <div className="p-2 m-2 col-6">
                        <h3>Additional information:</h3>
                        <p>
                            Comment: {recommendation.comment}
                        </p>
                        Has it been sent: {recommendation.time_sent === null ? <span className="text-danger">No</span> : <span className="text-success">Yes</span>}.
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
