import {IRecommendationProps, IRecommendationsList} from "../../types/interfaces/recommendation.interfaces";
import {Row, Col, Container} from "react-bootstrap";
import {BeatLoader} from "react-spinners";
import {RecommendationItem} from "./RecommendationItem";
import {useDispatch, useSelector} from "react-redux";
import {getAllRecommendations} from "../../store/actions/recommendationActions";
import {IRootState} from "../../types/interfaces/state.interfaces";
import {useEffect} from "react";

export const RecommendationsList = () => {
    const userStore = useSelector((state: IRootState) => state.user.user);
    const dispatch = useDispatch();

    const recsStore = useSelector((state: IRootState) => state.user.recommendations);

    const recommendations = recsStore.recommendations;

    useEffect(() => {
        if (!recommendations || recommendations.length === 0) {
            getAllRecommendations(dispatch, userStore.user.id, userStore.token);
        }
    })

    if (!recsStore.loading)
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
