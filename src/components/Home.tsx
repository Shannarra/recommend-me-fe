import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../store/actions/userActions";
import {BeatLoader} from "react-spinners";

import {IRootState} from "../types/interfaces/state.interfaces";
import {AfterLogin} from "./user/AfterLogin";
import {useEffect} from "react";

export const Home = () => {
    const {loading, error, user} = useSelector((state: IRootState) => state.user.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if (loading) {
            loginUser(dispatch, {
                "user": {
                    "email": "petar@test.mail",
                    "password": "123456"
                }
            });
        }

    }, [dispatch, user, loading]);

    if (user && !loading)
    {}

    return loading ?
        <>
            Loading <br/>
            <BeatLoader/>
        </> :
        <>
            {error && <h1 className="text-danger">{error?.message}</h1>}
            {!error && <AfterLogin user={user.user} token={user.token} />}
        </>
}
