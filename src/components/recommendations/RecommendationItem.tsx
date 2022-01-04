import {IRecommendationProps} from "../../types/interfaces/recommendation.interfaces";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export const RecommendationItem = (props: { recommendation: IRecommendationProps, user_id: number, token: number }) => {
    const {recommendation, user_id, token} = props;

    return (<Col md="5" style={{textDecoration: 'none'}}>
        <Link to={{
            pathname: `/recommendations/${recommendation.id}`,
        }} state={{id: recommendation.id, user_id, token}}>
            {recommendation.comment}
        </Link>
    </Col>);
}
