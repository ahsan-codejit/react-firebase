import React from "react";
import { Link } from 'react-router-dom';
const ListItem = (props) => {
    let order = props.order || {};
    let address = '';
    if (order.address && order.address.country) {
        address = order.address.country
    }
    let customer = '';
    if (order.customer && order.customer.name) {
        customer = order.customer.name;
    }
    let bookingDate = order.bookingDate || '';


    return (
        <div className="row">
            <div className="col-3">
                <Link to={'/account/order/' + order.id}>{order.title}</Link>
            </div>
            <div className="col-3">{address}</div>
            <div className="col-3">{customer}</div>
            <div className="col-3">{new Date(bookingDate).toLocaleString()}</div>
        </div>
    );
}

export default ListItem;
