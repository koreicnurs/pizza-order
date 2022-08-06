import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {NavLink} from "react-router-dom";
import {getDishes} from "../../store/actions/dishesActions";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {deleteDishAction} from "../../store/actions/deleteDishActions";
import './Dishes.css';

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
            <NavLink className='btn-link add-link' to='/add'>Add Dish</NavLink>
            <div className='dishes'>
            {dishes.map(d => {
                return (

                        <Card sx={{maxWidth: 345}} key={d.id}>
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
                            <CardActions>
                                <NavLink className='btn-link' to={`/edit/${d.id}`}>Edit</NavLink>
                                <Button
                                    size="small"
                                    onClick={() => deleteDish(d.id)}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>

                )
            })}
            </div>
        </>
    );
};

export default Dishes;