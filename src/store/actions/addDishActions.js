import axiosApi from "../../axiosApi";

export const ADD_DISH_REQUEST = 'ADD_DISH_REQUEST';
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const ADD_DISH_FAILURE = 'ADD_DISH_FAILURE';

export const dishesRequest = () => ({type: ADD_DISH_REQUEST});
export const dishesSuccess = dishes => ({type: ADD_DISH_SUCCESS, payload: dishes});
export const dishesFailure = error => ({type: ADD_DISH_FAILURE, payload: error});

export const createDish = addData => {

    return async dispatch => {
        try{
            dispatch(dishesRequest());
            await axiosApi.post('/dishes.json', addData);
            dispatch(dishesSuccess());
        } catch (error){
            dispatch(dishesFailure(error));
            throw error;
        }
    };
};