import React, { useEffect, useState } from "react";

import ListItem from './ListItem';
import { getOrders } from '../../lib/orders';
import axios from 'axios';
const OrderList = () => {
    let [data, setData] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            // const result = await axios(
            //     'http://localhost:3001/orders',
            // );
            // console.log(result.data.orders);
            // setData(result.data.orders);
            const result = await getOrders();
            console.log(result);
            setData(result);
        };

        fetchData();
    }, []);
    data = data || [];
    return (
        <div className="container">
            {data.map((order) =>
                <ListItem key={order.id.toString()}
                    order={order} />
            )}
        </div>
    );
}

export default OrderList;
