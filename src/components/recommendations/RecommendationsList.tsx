import {IRecommendationProps, IRecommendationsList} from "../../types/interfaces/recommendation.interfaces";
import {Row, Col, Container} from "react-bootstrap";
import {BeatLoader} from "react-spinners";

function RecommendationItem(props: { recommendation: IRecommendationProps }) {
    return (<Col md="5">
        {props.recommendation.comment}
    </Col>);
}

export const RecommendationsList = (props: { recommendations: IRecommendationsList}) => {
    const {recommendations} = props.recommendations;

    if (props.recommendations.error)
        return <h1>{props.recommendations.error.message}</h1>

    if (!props.recommendations.loading)
      return (
          <Container>
              <Row md="6">
                  {
                      recommendations?.map((x: IRecommendationProps) => <RecommendationItem recommendation={x} key={x.id} />)
                  }
              </Row>
          </Container>
      )
    return <>Loading recommendations... <br/> <BeatLoader/></>
}
