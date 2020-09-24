import React from 'react';
import { Switch, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './components/account/Dashboard';
import SignIn from './components/auth/SignIn';
import Order from './components/orders/Order';
import Orders from './components/orders/Orders';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account" component={Dashboard} exact />
        <Route path="/account/orders" component={Orders} exact />
        <Route path="/account/order/:id" component={Order} exact />
        <Route exact path='/' component={SignIn} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
