import {IUserPureProps} from "../../types/interfaces/user.interfaces";
import {RecommendationsList} from "../recommendations/RecommendationsList";

export const AfterLogin = (props: { user: IUserPureProps, token: string}) => {
    const user = props.user;

    return (
        <>
            <h1 className="text-success">Hi, {user.fname} {user.lname} !</h1>
            <h2 className="text-muted">{user.email}</h2>

            <RecommendationsList />
        </>
    );
}
