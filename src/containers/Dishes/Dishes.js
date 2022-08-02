import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {NavLink} from "react-router-dom";
import {getDishes} from "../../store/actions/dishesActions";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishesCombine.dishes);
    const loading = useSelector(state => state.dishesCombine.loading);

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    return loading ? (<Spinner/>)
        : dishes && (
        <>

            {dishes.map(d => {
                return <p>{d.title}</p>
            })}
            <NavLink to='/add'>Add Dish</NavLink>
        </>
    );
};

export default Dishes;