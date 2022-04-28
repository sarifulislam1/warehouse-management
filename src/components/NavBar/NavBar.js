import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import './NavBar.css'

const NavBar = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fw-bold ">
            <div className="container">
                <Link className="navbar-brand fs-4 text-success" to={'/'}>Fresh Grocery</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-success" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text">

                        {
                            !user ? <Link className="nav-link active text-success" aria-current="page" to="/login">Login</Link> : <Link onClick={handleSignOut} className="nav-link active text-success" aria-current="page" to="/login">Log Out</Link>

                        }


                    </span>
                    <span className="navbar-text">
                        {
                            !user ? <Link className="nav-link active text-success" aria-current="page" to="/signup">Sign Up</Link> : <Link onClick={handleSignOut} className="nav-link active text-success" aria-current="page" to="/signup">Log Out</Link>

                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;