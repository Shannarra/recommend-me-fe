import {IRecommendationProps} from "../../types/interfaces/recommendation.interfaces";
import {Row, Container} from "react-bootstrap";
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
        getAllRecommendations(dispatch, userStore.user.id, userStore.token);
    }, [userStore.token])

    if (!recsStore.loading)
      return (
          <Container>
              {recsStore.error && <h1 className='text-danger'>{recsStore.error.message}</h1>}
              <Row md="6">
                  {!recsStore.error &&
                      recommendations?.map(
                          (x: IRecommendationProps) =>
                              <RecommendationItem user_id={userStore.id} token={userStore.token} recommendation={x} key={x.id} />)
                  }
              </Row>
          </Container>
      )
    return <>Loading recommendations... <br/> <BeatLoader/></>
}
