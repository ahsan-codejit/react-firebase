import React, { useContext } from 'react';
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";
import { auth } from '../../lib/firebase';

const Nav = () => {
    let user = useContext(UserContext);
    let name = user && user.name || 'Missing';
    let email = user && user.email || 'a@a.com';
    return (
        <div className="container">
            <div className="user-info">
                <h3>Profile</h3>
                <p>{name}</p>
                <p>{email}</p>
                <button className="btn btn-warning mt-4" onClick={() => { auth.signOut() }}>Sign out</button>
            </div>
            <div className="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/account/orders">orders</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Nav;
