import {IRecommendationsList} from "./recommendation.interfaces";

export interface IUserLoginProps {
    user: {
        email: string,
        password: string
    }
}

export interface IUserPureProps {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    fname: string;
    lname: string;
}

export interface IAfterUserLoggedProps {
    message: string;
    user: IUserPureProps;
    token: string;
    loading: boolean;
    error?: any;
}

export interface IUserStore {
    user: any,
    recommendations: IRecommendationsList
}
