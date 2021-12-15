import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "./reducers";
import {LOCAL_STORAGE, LOGIN_STATE, USER_LOGIN_STATE, USER_LS_NAME} from "./constants";
import {userLogin} from "./actions/userActions";
import {Alert} from "react-bootstrap";
import {RecommendationsList} from "./components/recommendations/RecommendationsList";
import {LoginForm} from "./components/LoginForm";


interface IUserProps {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    fname:  string;
    lname: string;
}

interface ILoginState {
    state: string;
    message: string;
    statusCode: number;
    statusMessage: string;
}

function LoginStateAlert({ statusCode, state, statusMessage}: ILoginState) {
    const [show, setShow] = useState(true);

    const dismiss = (val: boolean) => {
        setShow(val);
        LOCAL_STORAGE.remove(USER_LOGIN_STATE);
    }

    if (show) {
        return (
            <div className='container'>
                <div className='align-content-center m-1'>
                    <Alert variant={statusCode === 200 ? 'success' : 'danger'} dismissible onClose={dismiss}>
                        [{statusCode}]! {state} ({statusMessage})
                    </Alert>
                </div>
            </div>
        );
    }
    return <></>
}

function App() {

    // @ts-ignore
    const _user = useSelector((state: IRootState) => state.userLogin)

    const dispatch = useDispatch();

    const [user, setUser] = useState<IUserProps | null>(LOCAL_STORAGE.tryParseRead(USER_LS_NAME));
    const loggedIn = user !== null;

    const [loginState, setLoginState] = useState<ILoginState | null>(LOCAL_STORAGE.tryParseRead(USER_LOGIN_STATE));

    useEffect(() =>{
        // TODO: This is fake auto-login, fix!
        // if (user === null) {
        //
        //     dispatch(userLogin({
        //         user: {
        //             email: 'test@mail.com',
        //             password: '123456'
        //         }
        //     }));
        //
        //     setUser(LOCAL_STORAGE.tryParseRead(USER_LS_NAME))
        //     setLoginState(LOCAL_STORAGE.tryParseRead(USER_LOGIN_STATE));
        //
        //     console.log(loginState);
        //     setTimeout(() => window.location.reload(), 500);
        // } else {
        //     LOCAL_STORAGE.remove(USER_LOGIN_STATE);
        // }
    }, [dispatch])

    console.log(loginState);
    return (
    <div className="App">
        {loginState && <LoginStateAlert {...loginState} />}
        {loggedIn && (
            <>
                <h1>Hello, {user?.fname}</h1>
                Recommendations sent by {user?.fname}
                <RecommendationsList />
            </>
        )}

        {!loggedIn && <LoginForm />}
    </div>
  );
}

export default App;
