import {IRecommendationsList} from "./recommendation.interfaces";
import {IUserStore} from "./user.interfaces";

export interface IRootState {
    user: IUserStore;
    recommendations: IRecommendationsList
}
