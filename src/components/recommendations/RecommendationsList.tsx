import {Card, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {JWT_LS_NAME, LOCAL_STORAGE, RECOMMENDATIONS_LS_NAME, USER_LS_NAME} from "../../constants";
import {useDispatch} from "react-redux";
import {getAllRecommendations, sendRecommendation} from "../../actions/recommendationActions";
import {BeatLoader} from "react-spinners";
import {Link} from "react-router-dom";

export interface IRecommendationProps
{
    id: number,
    by: string,
    to: string,
    comment: string,
    time_sent?: null | string,
    cv: IRecommendationCVProps,
    updated_at: string,
    send_now: boolean
}

interface IRecommendationCVProps {
    name: string;
    size_b: number;
    url: string
}

function RecommendationCard(recommendation :IRecommendationProps) {

    const dispatch = useDispatch();
    const currentUser= LOCAL_STORAGE.tryParseRead(USER_LS_NAME);

    const [rec, setRec] = useState<IRecommendationProps>(recommendation);

    const handleSendNow = () => {
        if (!recommendation.send_now && !recommendation.time_sent) {
            dispatch(sendRecommendation(recommendation, currentUser.id));
            rec.send_now = true;
            setRec(rec);
        }
    }

    if (!rec.cv)
        return <></>

    return (
        <Card className="col-md-5 m-1" style={{height: '30vh', padding: '25px'}}>
            <Card.Body>
                <Card.Title>File: {rec.cv.name} ({rec.cv.size_b} B)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By: {rec.by}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">To: {rec.to}</Card.Subtitle>
                <Card.Text>
                    <p>
                    This recommendation
                    {
                        rec.time_sent === null ?
                            " hasn't been sent yet" :
                            ` has been sent on ${rec.time_sent}`
                    }.
                    </p>
                    {rec.comment && <p><i>"{rec.comment}"</i></p>}
                </Card.Text>
                <Card.Link href={`${rec.cv.url}`}>File url</Card.Link> <br/>
                {!rec.send_now && !rec.time_sent && <button className='btn btn-success' onClick={handleSendNow}>
                    Send now!
                </button>}
            </Card.Body>
        </Card>
    )
}

export const RecommendationsList = () => {

    if (!LOCAL_STORAGE.tryParseRead(RECOMMENDATIONS_LS_NAME))
        LOCAL_STORAGE.write(RECOMMENDATIONS_LS_NAME, JSON.stringify({ }));

    const [recommendations, setRecs] = useState<IRecommendationProps[]>(LOCAL_STORAGE.tryParseRead(RECOMMENDATIONS_LS_NAME).recommendations);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecommendations({
            userId: LOCAL_STORAGE.tryParseRead(USER_LS_NAME).id,
            userToken: LOCAL_STORAGE.tryParseRead(JWT_LS_NAME).token
        }));

        setRecs(LOCAL_STORAGE.tryParseRead(RECOMMENDATIONS_LS_NAME).recommendations);

        if (!recommendations) setTimeout(() => window.location.reload(), 500);
    }, [dispatch])

  return(
      recommendations?.length > 0 ? <>
            <h3>Printing recommendations:</h3>
            <Container className="row" style={{margin: "0 0 0 20%"}}>
              {recommendations && recommendations.map((recommendation: IRecommendationProps, id: number) => {
                  return <RecommendationCard {...recommendation} key={id}/>
              })}

              {!recommendations && (
                  <>
                      <div className="text-center">
                          <h3>Loading...</h3>
                          <BeatLoader css="color: lightgray; display: block;" />
                      </div>
                  </>
              )}
            </Container>
          </>: <>
        <h2 className="text-center text-warning"> No recommendations found.</h2>
          Don't worry, you can always <Link to='/recommendations/new'>create one</Link>.
      </>
  )
}
