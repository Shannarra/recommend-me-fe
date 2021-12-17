import React, { useState} from 'react';
import './App.css';
import {LOCAL_STORAGE, USER_LOGIN_STATE, USER_LS_NAME} from "./constants";
import {Alert} from "react-bootstrap";
import {RecommendationsList } from "./components/recommendations/RecommendationsList";
import { NewRecommendation } from "./components/recommendations/NewRecommendation";
import {LoginForm} from "./components/LoginForm";

import { Routes, Route, Navigate, Link } from 'react-router-dom';

export const Redirect = (to: string) => {
    return
}

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


const Home = () => {

    const [user, setUser] = useState<IUserProps | null>(LOCAL_STORAGE.tryParseRead(USER_LS_NAME));
    const loggedIn = user !== null;

    const [loginState, setLoginState] = useState<ILoginState | null>(LOCAL_STORAGE.tryParseRead(USER_LOGIN_STATE));

    return (
        <>
            {loginState && <LoginStateAlert {...loginState} />}
            {loggedIn && (
                <>
                    <h1>Hello, {user?.fname}</h1>
                    Recommendations sent by {user?.fname} (<Link to='/logout'>log out</Link>) <br/>
                    <Link to='/recommendations/new' className="btn btn-success">Create a new one!</Link>
                    <RecommendationsList />
                </>
            )}

            {/* a new way to do <Redirect/> ??? */}
            {!loggedIn && <Navigate replace to='/login' />}
        </>
    );
}

function Logout() {
    window.localStorage.clear();
    return <Navigate replace to='/login' />;
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/recommendations" element={<RecommendationsList/>}/>

                {/*TODO: FIX ALL ROUTES! */}
                <Route path="/recommendations/new" element={<NewRecommendation/>}/>
                <Route path="/recommendations/view" element={null}>
                    <Route path="recommendations/:id" element={null}/>
                </Route>

                <Route path="/profile" />
                <Route path="/profile/edit" element={null}/>
            </Routes>
        </div>
    )
}

export default App;
