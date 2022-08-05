import React from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getDishes} from "../../store/actions/dishesActions";
import {addOrder, deleteOrder} from "../../store/actions/makeOrdersActions";
import {Button} from "@mui/material";
import {createOrder} from "../../store/actions/ordersActions";
import {useHistory} from "react-router-dom";

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
        await dispatch(createOrder(data))
        history.push('/orders');
    }

    return loading ? (<Spinner/>)
        : dishes && (
        <>

            {dishes.map(d => {
                return (
                    <div key={d.id} onClick={() => addDishHandler(d)}>
                        <p>{d.title}</p>
                    </div>
                )
            })}
            <div>
                {Object.keys(orders).map(o => {
                    return (
                        <div key={o}>
                            <p>{orders[o].title}</p>
                            <p>{orders[o].price}</p>
                            <p>{orders[o].allPrice}</p>
                            <p>{orders[o].count}</p>
                            <Button variant="contained" onClick={() => deleteDish(orders[o], o)}>Delete</Button>
                        </div>
                    )
                })}
                <Button variant="contained" onClick={() => createOrderFB(orders)}>Create order</Button>
            </div>

        </>
    );
};

export default MakeOrders;