export interface IRecommendationCVProps {
    url: string,
    name: string,
    size_b: number
}

export interface IRecommendationProps {
    id: number;
    by: string;
    to: string;
    comment: string;
    updated_at: string;
    send_now: string;
    time_sent: string;
    cv: IRecommendationCVProps;
}

export interface IRecommendationsList {
    recommendations: IRecommendationProps[];
    loading?: boolean
    error: any;
}
