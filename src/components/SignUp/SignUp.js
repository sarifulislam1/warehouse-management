import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import axios from 'axios';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)

    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    // const navigate = useNavigate()
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    if (user) {
        const url = 'https://boiling-crag-46002.herokuapp.com/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken)
            });


        navigate(from);
    }

    if (loading) {
        <Spinner animation="border" variant="success" />
    }

    useEffect(() => {

        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password.")
                    break;
                case "auth/wrong-password":
                    toast("Wrong password!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [error])




    return (
        <div className='w-50 mx-auto text-start mt-5'>
            <h2 className='text-success'>Please Sign Up</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p>Don't you have an account? <Link to={'/login'}>Login</Link></p>

                <p>Forget Your Password? <Link to={'/resetPassword'}>Reset Password</Link></p>
                <Button variant="success" type="submit">
                    Sign Up
                </Button>
            </Form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default SignUp;