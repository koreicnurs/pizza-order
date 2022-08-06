import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {completeOrder, getOrders} from "../../store/actions/ordersActions";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Spinner from "../../components/UI/Spinner/Spinner";
import './Orders.css';

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const dishes = useSelector(state => state.addOrder.countOrders);
    const loading = useSelector(state => state.orders.loading);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch, dishes]);


    const calculateTotal = array => {
        return Object.keys(array).map(d => {
            return Object.values(array[d]).reduce((acc, dish) => {
                return acc + dish.allPrice;
            }, 150);
        });
    };

    const total = calculateTotal(orders);

    return loading ? (<Spinner/>)
        : orders && (
        <div className='complete-orders'>
            {Object.keys(orders).map(o => {
                const order = orders[o];
                return (
                    <Card sx={{minWidth: 275}} key={o + order}>
                        <CardContent>
                            {Object.keys(order).map(i => {
                                const r = order[i]
                                return (
                                    <div key={r.price + r.title}>
                                        <Typography variant="h5" component="div">
                                            {r.title.toUpperCase()} <span>x{r.count}</span>
                                        </Typography>
                                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                            Each total price: {r.allPrice}
                                        </Typography>

                                    </div>
                                )
                            })}
                            {total.map(t => {
                                return (
                                    <Typography key={t++} sx={{fontSize: 20}} color="text.secondary" gutterBottom>
                                        Total Price: {t}
                                    </Typography>
                                )
                            })}
                        </CardContent>
                        <CardActions className='btn-complete'>
                            <Button  variant="contained" onClick={() => dispatch(completeOrder(o))}>Complete
                                Order</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    );
};

export default Orders;