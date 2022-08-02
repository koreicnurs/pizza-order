import axiosApi from "../../axiosApi";

export const DELETE_DISH_REQUEST = 'DELETE_DISH_REQUEST';
export const DELETE_DISH_SUCCESS = 'DELETE_DISH_SUCCESS';
export const DELETE_DISH_FAILURE = 'DELETE_DISH_FAILURE';

export const deleteDishRequest = () => ({type: DELETE_DISH_REQUEST});
export const deleteDishSuccess = dishes => ({type: DELETE_DISH_SUCCESS, payload: dishes});
export const deleteDishFailure = error => ({type: DELETE_DISH_FAILURE, payload: error});

export const deleteDishAction = id => {

    return async dispatch => {
        try{
            dispatch(deleteDishRequest());
            await axiosApi.delete(`/dishes/${id}.json`);
            dispatch(deleteDishSuccess());
        } catch (error){
            dispatch(deleteDishFailure(error));
            throw error;
        }
    };
};