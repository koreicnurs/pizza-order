import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {NavLink} from "react-router-dom";
import {getDishes} from "../../store/actions/dishesActions";
import {Button} from "@mui/material";
import {deleteDishAction} from "../../store/actions/deleteDishActions";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishesCombine.dishes);
    const loading = useSelector(state => state.dishesCombine.loading);


    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const deleteDish = async (id) => {
        await dispatch(deleteDishAction(id));
        dispatch(getDishes());
    };

    return loading ? (<Spinner/>)
        : dishes && (
        <>

            {dishes.map(d => {
                return (
                    <div key={d.id}>
                        <p>{d.title}</p>
                        <NavLink to={`/edit/${d.id}`}>Edit</NavLink>
                        <Button
                            variant="contained"
                            onClick={() => deleteDish(d.id)}
                        >
                            Delete
                        </Button>
                    </div>
                )
            })}
            <NavLink to='/add'>Add Dish</NavLink>
        </>
    );
};

export default Dishes;