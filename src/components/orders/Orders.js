import React from 'react';
import Nav from '../account/Nav';


const Orders = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 left-box">
                    <Nav />
                </div>
                <div className="col-9 content-box">
                    <h3>Orders</h3>
                </div>
            </div>
        </div>
    );
}

export default Orders;
