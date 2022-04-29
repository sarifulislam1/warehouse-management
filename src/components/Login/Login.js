import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    console.log(user);
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
    if (loading) {
        <Spinner animation="border" variant="success" />
    }

    // let errorMsg;
    // if (error) {
    //     errorMsg = <p className='text-danger'>{error?.message}</p>
    // }

    useEffect(() => {

        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                case "auth/wrong-password":
                    toast("Wrong password!!")
                    break;
                case "auth/email-already-exists":
                    toast("This email already exists")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [error])

    return (
        <div className='w-50 mx-auto text-start mt-5'>
            <h2 className='text-secondary'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" onBlur={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                    <br />
                    {/* {errorMsg} */}
                    <p>Already have an account? <Link to={"/signup"}>Sign Up</Link></p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>

            </form>

        </div>
    );
};

export default Login;