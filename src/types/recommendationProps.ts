export interface IUserRecommendationsProps {
    userId: number;
    userToken: string;
}

export interface ICreateRecommendationProps {
    user_id: number;
    cv: File;
    by: string;
    send_now?: boolean;
}
