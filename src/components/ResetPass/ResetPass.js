import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';

const ResetPass = () => {
    const [email, setEmail] = useState('');

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );


    const handleEmail = (e) => {
        setEmail(e.target.value)

    }

    const passRset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(email)
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }

    return (
        <div className='m-5 p-5 text-success mx-auto'>
            <h1 className='m-5'>Forget Your Password? Don't Worry!</h1>
            <form onSubmit={passRset}>
                <label >Your Email:</label>
                <input className='m-3 ' onBlur={handleEmail} placeholder='Enter Your Email' type="email" name="email" />
                <br /><input className='m-3 btn btn-success' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ResetPass;