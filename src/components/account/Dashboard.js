import React, { useContext } from "react";
import './dashboard.scss';
import Nav from "./Nav";
import Profile from "./Profile";

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 left-box">
                    <Nav />
                </div>
                <div className="col-9 content-box">
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;