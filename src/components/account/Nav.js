import React from 'react';

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container">
            <div className="user-info">
                <h3>Profile</h3>
                <p>Name</p>
                <p>Email</p>
            </div>
            <div className="menu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/account/orders">orders</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Nav;
