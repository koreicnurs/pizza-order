import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import {createDish} from "../../store/actions/addDishActions";
import Spinner from "../../components/UI/Spinner/Spinner";

const AddDish = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.addDish.loading);
    const history = useHistory();

    const [dish, setDish] = useState({
        title: '',
        price: '',
        image: '',
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;

        setDish(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmitHandler = async e => {
        e.preventDefault();
        await dispatch(createDish(dish));
        history.push('/');
    };
    return loading ? (<Spinner/>) : (
        <>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    className="Input"
                    name="title"
                    value={dish.title}
                    onChange={onInputChange}
                    placeholder="Your Name"
                />
                <input
                    type="number"
                    className="Input"
                    name="price"
                    value={dish.price}
                    onChange={onInputChange}
                    placeholder="Your email"
                />
                <input
                    type="text"
                    className="Input"
                    name="image"
                    value={dish.image}
                    onChange={onInputChange}
                    placeholder="Street"
                />
                {/*<Button type={'submit'} btnType="Success">ORDER</Button>*/}
                <Button variant="contained" type='submit'>Create Dish</Button>
            </form>
        </>
    );
};

export default AddDish;