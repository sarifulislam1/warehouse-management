import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
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
                    navigate(from);
                });




        }
    }, [user]);

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn  w-50 d-block mx-auto my-4 border border-2 rounded'>
                <img style={{ width: '30px' }} src="https://cdn.imgbin.com/17/10/21/google-suite-icon-google-icon-LmAAJV07.jpg" alt="" />
                <span className='px-2 text-success fs-5'>Google Sign In</span>
            </button>
        </div>
    );
};

export default GoogleLogin;