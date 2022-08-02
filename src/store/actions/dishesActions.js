import axiosApi from "../../axiosApi";

export const DISHES_REQUEST = 'DISHES_REQUEST';
export const DISHES_SUCCESS = 'DISHES_SUCCESS';
export const DISHES_FAILURE = 'DISHES_FAILURE';

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = dishes => ({type: DISHES_SUCCESS, payload: dishes});
export const dishesFailure = error => ({type: DISHES_FAILURE, payload: error});

export const getDishes = () => {
    return async dispatch => {

        try {
            dispatch(dishesRequest());
            const response = await axiosApi('/dishes.json')
            const dishes = Object.keys(response.data).map(d => {
                return {
                    title: response.data[d].title,
                    price: response.data[d].price,
                    image: response.data[d].image,
                    id: d,
                };
            });

            if (response.data) {
                dispatch(dishesSuccess(dishes));
            } else {
                dispatch(dishesSuccess(null));
            }
        } catch (error){
            dispatch(dishesFailure(error));
            throw error;
        }
    };
};