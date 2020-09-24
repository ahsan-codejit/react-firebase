import React, { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';
import './signin.scss';
import { UserContext } from "../../providers/UserProvider";

import { auth } from "../../lib/firebase";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signInHandler = async (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(function (firebaseUser) {
                console.log(firebaseUser);
            })
            .catch(error => {
                setError(error.toString())
                console.error("Error signing in with password and email", error);
            });
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }
    let user = useContext(UserContext);
    return (
        user ?
            <Redirect to="/account" />
            :
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                name="email"
                                className="form-control"
                                type="text"
                                name="email"
                                onChange={(event) => onChangeHandler(event)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="password"
                                onChange={(event) => onChangeHandler(event)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={(event) => { signInHandler(event, email, password) }}>
                            Submit
            </button>

                    </form>
                </div>
            </div>
    );
}
export default SignIn;