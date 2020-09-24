import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

const PrivateRoute = (props) => {
    let user = useContext(UserContext);
    return user ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
        (<Redirect to="/" />);
};
export default PrivateRoute;

