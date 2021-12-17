export interface IUserRecommendationsProps {
    userId: number;
    userToken: string;
}

export interface ICreateRecommendationProps {
    user_id: number;
    cv: File;
    by: string;
    comment?: string;
    send_now?: boolean;
}

export interface IUpdateRecommendationProps extends ICreateRecommendationProps {
    id: number;
}
