import React from 'react';
import Nav from '../account/Nav';

import OrderList from './OrderList';

const Orders = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 left-box">
                    <Nav />
                </div>
                <div className="col-9 content-box">
                    <h3>Order List</h3>
                    <OrderList />
                </div>
            </div>
        </div>
    );
}

export default Orders;
