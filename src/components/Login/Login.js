import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });;

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)

    }

    const handleLogin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }



    const navigate = useNavigate()

    if (user) {
        navigate('/home')
    }

    return (
        <div className='w-50 mx-auto text-start'>
            <h2 className='text-secondary'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" onBlur={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                    <br />
                    <p>Already have an account? </p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    );
};

export default Login;