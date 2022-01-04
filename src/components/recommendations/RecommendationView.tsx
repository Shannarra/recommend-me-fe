import {useLocation, Navigate, Link} from "react-router-dom";
import {getSpecificRecommendation, sendRecommendationNow} from "../../store/actions/recommendationActions";
import {useDispatch, useSelector, useStore} from "react-redux"
import {IRootState} from "../../types/interfaces/state.interfaces";
import {useEffect, useState} from "react";
import {IRecommendationProps} from "../../types/interfaces/recommendation.interfaces";
import {user} from "../../store/reducers";

export const RecommendationView = () => {
    const location= useLocation()
    const dispatch = useDispatch();
    //const [recommendation, setRecommentaion] = useState<IRecommendationProps>();

    // if (!location?.state) {
    //     return <Navigate replace to='/'/>
    // }


    const {id, user_id, token } = location?.state;

    let recommendation: any = undefined

    useEffect(() => {
        getSpecificRecommendation(dispatch, user_id, token, id);
    }, [dispatch, user_id, token, id, recommendation?.send_now]);

    const recsStore = useSelector((state: IRootState) => state.user.recommendations);

    if (!recsStore.loading)
        recommendation = recsStore.recommendations[0];

    const handleSend = () => {
        sendRecommendationNow(dispatch, user_id, token, recommendation);
        setInterval(()  => window.location.reload(), 500);
    }

    if (!recommendation && !recsStore.loading && recsStore.error)
        return <>Cound not find rec. Error: {recsStore.error.message}</>
    else {
        return (
            <div className="row">
                <Link to='/' className="btn btn-primary">🔙 To homepage</Link>
                <div className="col-3"></div>
                <div className="col-6">
                    {/* @ts-ignore*/}
                    <h1 className="text-center">Details about recommendation №{recommendation?.id}</h1>

                    <div className="text-lg-start row">
                        <h2>Detailed information</h2>
                        <div className="col-md-6 p-1">
                            {/* @ts-ignore*/}
                            Created by <span className="text-muted">{recommendation?.by} </span> &nbsp;
                            {/* @ts-ignore*/}
                            for <span className="text-muted">{recommendation?.to}</span>.
                        </div>
                        <div className="col-md-6">
                            <h3>Additional information:</h3>
                            <p>
                                {/* @ts-ignore*/}
                                Comment: {recommendation?.comment}
                            </p>

                            {
                                /* @ts-ignore*/
                                recommendation?.time_sent === null ?
                                    <>
                                        <p>
                                            <span className="text-danger">This item has not been sent yet.</span>
                                        </p>
                                        <button className="btn btn-success" onClick={() => {
                                            sendRecommendationNow(dispatch, user_id, token, recommendation)
                                        }}>Send now!
                                        </button>
                                    </>
                                    :
                                    <>

                                        {/* @ts-ignore*/}
                                        <span className="text-success">This item has been sent on {recommendation?.time_sent}</span>
                                    </>
                            }
                        </div>
                    </div>
                    {/* @ts-ignore*/}
                    <p>{recommendation?.send_now}</p>
                    {/* @ts-ignore*/}
                    <p>{recommendation?.by}</p>

                    {/* @ts-ignore*/}
                    <p>{recommendation?.to}</p>

                    {/* @ts-ignore*/}
                    <p>{recommendation?.cv?.name}</p>

                    {/* @ts-ignore*/}
                    <p>{recommendation?.cv?.url}</p>

                    {/* @ts-ignore*/}
                </div>
                <div className="col-3"></div>
            </div>
        );
    }
}
