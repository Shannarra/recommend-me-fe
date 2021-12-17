import {Card, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {JWT_LS_NAME, LOCAL_STORAGE, RECOMMENDATIONS_LS_NAME, USER_LS_NAME} from "../../constants";
import {useDispatch} from "react-redux";
import {getAllRecommendations} from "../../actions/recommendationActions";
import {BeatLoader} from "react-spinners";
import {Link} from "react-router-dom";

interface IRecommendationProps
{
    by: string,
    to: string,
    comment: string,
    time_sent?: null | string,
    cv: IRecommendationCVProps,
    id: number,
    updated_at: string,
    send_now: boolean
}

interface IRecommendationCVProps {
    name: string;
    size_b: number;
    url: string
}

function RecommendationCard(recommendation :IRecommendationProps) {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>File: {recommendation.cv.name} ({recommendation.cv.size_b} B)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">By: {recommendation.by}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">To: {recommendation.to}</Card.Subtitle>
                    <Card.Text>
                        <p>
                        This recommendation
                        {
                            recommendation.time_sent === null ?
                                " hasn't been sent yet" :
                                ` has been sent on ${recommendation.time_sent}`
                        }.
                        </p>
                        {recommendation.comment && <p><i>"{recommendation.comment}"</i></p>}
                    </Card.Text>
                    <Card.Link href={`${recommendation.cv.url}`}>File url</Card.Link> <br/>
                    {!recommendation.time_sent && <button className='btn btn-success'>Send now!</button>}
                </Card.Body>
            </Card>
        </Container>
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

        //if (!recommendations) setTimeout(() => window.location.reload(), 500);
    }, [dispatch])

  return(
      recommendations?.length > 0 ? <>
          <h3>Printing recommendations:</h3>
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
      </> : <>
        <h2 className="text-center text-warning"> No recommendations found.</h2>
          Don't worry, you can always <Link to='/recommendations/new'>create one</Link>.
      </>
  )
}
