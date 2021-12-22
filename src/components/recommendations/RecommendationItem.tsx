import {IRecommendationProps} from "../../types/interfaces/recommendation.interfaces";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export const RecommendationItem = (props: { recommendation: IRecommendationProps }) => {
    const {recommendation} = props;

    return (<Col md="5" style={{textDecoration: 'none'}}>
        <Link to={{
            pathname: `/recommendations/${recommendation.id}`,
        }} state={{recommendation}}>
            {recommendation.comment}
        </Link>
    </Col>);
}
