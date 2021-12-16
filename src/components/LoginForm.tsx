import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {FormLabel} from "react-bootstrap";
import {IUserLoginProps} from "../types/userLoginProps";
import {userLogin} from "../actions/userActions";
import {useDispatch} from "react-redux";
import {LOCAL_STORAGE, USER_LOGIN_STATE} from "../constants";
import {Navigate} from "react-router-dom";
import React from "react";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .min(4, 'Email too short!')
        .max(50, 'Email too long!')
        .required('Email is required!'),
    password: Yup.string()
        .min(3, 'Password requires at least 3 characters')
        .max(50, 'Password too long!')
        .required('Password required')
})

export const LoginForm = () => {

    const dispatch = useDispatch();

    // @ts-ignore
    const formSubmitted = ({ email, password }) => {
        const props: IUserLoginProps = { user: { email, password} }
        dispatch(userLogin(props));

        // force an update so we redirect
        setTimeout(() => window.location.reload(), 500);
    }

    if (LOCAL_STORAGE.tryParseRead(USER_LOGIN_STATE))
        return <Navigate replace to='/' />
    else
        return(
      <>
        <h1>In order to access / create recommendations please log in:</h1>

        <Formik initialValues={{
            email: '',
            password: ''
        }} validationSchema={LoginSchema} onSubmit={formSubmitted} >
            {({ errors, touched }) => (
                <Form>
                    <FormLabel>Email:</FormLabel>
                    <Field name="email" type='email'/>
                    {errors.email && touched.email ? (
                        <div className='text-danger'>{errors.email}</div>
                    ) : null}
                    <br/>
                    <FormLabel>Password:</FormLabel>
                    <Field name="password" type='password' />
                    {errors.password && touched.password ? (
                        <div className='text-danger'>{errors.password}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
      </>
    );
}
