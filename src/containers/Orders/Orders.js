import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../store/actions/ordersActions";
import {Button} from "@mui/material";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const dishes = useSelector(state => state.addOrder.countOrders);
    const loading = useSelector(state => state.orders.loading);

    useEffect(() => {
        dispatch(getOrders());
        console.log(orders);
        // Object.keys(orders).map(o => {
        //     const order = orders[o];
        //     return Object.keys(order).map(i => {
        //         console.log(order[i]);
        //     });
        // })
    }, [dispatch, dishes])

    return orders && (
        <>
            {Object.keys(orders).map(o => {

                const order = orders[o];
                return (<div>
                        {Object.keys(order).map(i => {
                    const r = order[i]
                    return (
                    <div>
                    <p>{r.title}</p>
                    <p>{r.price}</p>
                    <p>{r.count}</p>
                    </div>
                    )
                })}
                    <Button variant="contained">Complete Order</Button>
                </div>)

            })}
        </>
    );
};

export default Orders;