import React, { useState, useEffect } from 'react';
import Nav from '../account/Nav';
import { getOrder } from '../../lib/orders';
import axios from 'axios';

const Order = (props) => {
    let id = props.match.params.id;
    let [data, setData] = useState('');
    let [title, setTitle] = useState('');
    let [address, setAddress] = useState('');
    let [customer, setCustomer] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const result = await getOrder(id);
            console.log(result);
            // setData(result);
            setTitle(result.title);
            setCustomer(result.customer);
            setAddress(result.address);
        };
        fetchData();
    }, []);

    const updateOrder = (event) => {
        event.preventDefault();
        async function update() {
            const res = await axios.put('http://localhost:3001/orders/' + id, { title, customer, address });
            console.log(res.data);
        }
        update();
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'customer') {
            setCustomer(value);
        }
        if (name === 'address') {
            setAddress(value);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3 left-box">
                    <Nav />
                </div>
                <div className="col-9 content-box">
                    <h3>Order</h3>
                    <form>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                name="title"
                                className="form-control"
                                type="text"
                                value={title}
                                onChange={(event) => onChangeHandler(event)}
                            />
                        </div>
                        <div className="">
                            <h3>Address:</h3>

                            <p>Street: {address.street}</p>
                            <p>ZIP: {address.zip}</p>
                            <p>City: {address.city}</p>
                            <p>Country: {address.country}</p>
                        </div>
                        <div className="">
                            <h3>Customer</h3>
                            <p>Name: {customer.name}</p>
                            <p>email: {customer.email}</p>
                            <p>phone: {customer.phone}</p>
                        </div>
                        <div className="form-group">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={(event) => updateOrder(event)}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Order;
