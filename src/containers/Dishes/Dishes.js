import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDishes} from "../../store/reducers/dishesReducer";
import Spinner from "../../components/UI/Spinner/Spinner";

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
        </>
    );
};

export default Dishes;