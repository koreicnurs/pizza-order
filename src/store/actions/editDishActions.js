import axiosApi from "../../axiosApi";

export const GET_DISH_REQUEST = 'GET_DISH_REQUEST';
export const GET_DISH_SUCCESS = 'GET_DISH_SUCCESS';
export const GET_DISH_FAILURE = 'GET_DISH_FAILURE';

export const dishesRequest = () => ({type: GET_DISH_REQUEST});
export const dishesSuccess = dish => ({type: GET_DISH_SUCCESS, payload: dish});
export const dishesFailure = error => ({type: GET_DISH_FAILURE , payload: error});

export const PUT_DISH_REQUEST = 'PUT_DISH_REQUEST ';
export const PUT_DISH_SUCCESS = 'PUT_DISH_SUCCESS';
export const PUT_DISH_FAILURE = 'PUT_DISH_FAILURE';

export const putDishRequest = () => ({type: PUT_DISH_REQUEST });
export const putDishSuccess = changedDish => ({type: PUT_DISH_SUCCESS, payload: changedDish});
export const putDishFailure = error => ({type: PUT_DISH_FAILURE, payload: error});

export const getDish = (id) => {
    return async dispatch => {

        try {
            dispatch(dishesRequest());
            const response = await axiosApi(`/dishes/${id}.json`);

            if (response.data) {
                dispatch(dishesSuccess(response.data));
            } else {
                dispatch(dishesSuccess(null));
            }
        } catch (error){
            dispatch(dishesFailure(error));
            throw error;
        }
    };
};

export const putDish = (id, dish) => {
    return async dispatch => {

        try {
            dispatch(putDishRequest());
            await axiosApi.put(`/dishes/${id}.json`, dish)
            dispatch(putDishSuccess());
        } catch (error){
            dispatch(putDishFailure(error.message));
            throw error;
        }
    };
};
