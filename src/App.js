import React from 'react';
import { Switch, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './components/account/Dashboard';
import SignIn from './components/auth/SignIn';
import Order from './components/orders/Order';
import Orders from './components/orders/Orders';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/account" component={Dashboard} exact />
        <PrivateRoute path="/account/orders" component={Orders} exact />
        <PrivateRoute path="/account/order/:id" component={Order} exact />
        <PrivateRoute exact path='/' component={SignIn} />
        <PrivateRoute path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
