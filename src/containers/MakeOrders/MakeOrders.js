import React, {useEffect} from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {getDishes} from "../../store/actions/dishesActions";
import {addOrder, deleteOrder} from "../../store/actions/makeOrdersActions";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {createOrder} from "../../store/actions/ordersActions";
import {useHistory} from "react-router-dom";
import './MakeOrders.css';

const MakeOrders = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishesCombine.dishes);
    const orders = useSelector(state => state.addOrder.countOrders);
    const loading = useSelector(state => state.dishesCombine.loading);
    const history = useHistory();

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const deleteDish = (type, id) => {
        dispatch(deleteOrder(type, id));
    };

    const addDishHandler = type => {
        dispatch(addOrder(type));
    };

    const createOrderFB = async (data) => {
        await dispatch(createOrder(data));
        history.push('/orders');
    };

    return loading ? (<Spinner/>)
        : dishes && (
        <div className='make-orders'>
            <div className='dishes-block'>
                {dishes.map(d => {
                    return (
                        <Card className='dish' sx={{maxWidth: 345}} key={d.id} onClick={() => addDishHandler(d)}>
                            <CardMedia
                                component="img"
                                wegth='250'
                                image={d.image}
                                alt={d.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {d.title.toLocaleUpperCase()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {d.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            <div className='order-block'>
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                    Order
                </Typography>
                {Object.keys(orders).map(o => {
                    return (
                        <Card className='order-card' sx={{minWidth: 275}} key={o}>
                            <CardContent>
                                <Typography variant="body2" className='typography-order'>
                                    {orders[o].title.toUpperCase()}
                                </Typography>
                                <Typography variant="body2" className='typography-order'>
                                    Price: {orders[o].price}
                                </Typography>
                                <Typography variant="body2" className='typography-order'>
                                    Total price: {orders[o].allPrice}
                                </Typography>
                                <Typography variant="body2" className='typography-order'>
                                    Count: {orders[o].count}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' onClick={() => deleteDish(orders[o], o)}>Delete</Button>
                            </CardActions>
                        </Card>
                    )
                })}
                <Button variant="contained" onClick={() => createOrderFB(orders)}>Create order</Button>
            </div>
        </div>
    );
};

export default MakeOrders;