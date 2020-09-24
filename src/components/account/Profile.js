import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";


const Profile = () => {
    let user = useContext(UserContext);
    let name = user && user.name || 'Missing';
    let email = user && user.email || 'a@a.com';
    return (
        <div className="container">
            <h3>Profile</h3>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Profile;
