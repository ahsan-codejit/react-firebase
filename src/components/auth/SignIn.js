import React, { useState } from "react";
import './signin.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signInHandler = async (event, email, password) => {
        event.preventDefault();
        console.log(email, password);
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
    return (
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