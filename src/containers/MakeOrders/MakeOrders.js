import React from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getDishes} from "../../store/actions/dishesActions";
import {addOrder, deleteOrder} from "../../store/actions/makeOrdersActions";
import {Button} from "@mui/material";

const MakeOrders = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishesCombine.dishes);
    const orders = useSelector(state => state.addOrder.countOrders);
    const loading = useSelector(state => state.dishesCombine.loading);

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const deleteDish = (type, id) => {
        dispatch(deleteOrder(type, id));
    };

    const addDishHandler = type => {
        dispatch(addOrder(type));
    };

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
                            <p>{orders[o].count}</p>
                            <Button variant="contained" onClick={() => deleteDish(orders[o], o)}>Delete</Button>
                        </div>
                    )
                })}
            </div>
            <Button variant="contained">Create Order</Button>
        </>
    );
};

export default MakeOrders;