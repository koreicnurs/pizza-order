import {GET_DISH_FAILURE, GET_DISH_REQUEST, GET_DISH_SUCCESS} from "../actions/editDishActions";

const initialState = {
    dish: null,
    loading: false,
    error: null,
};

const editDishReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DISH_REQUEST:
            return {...state, loading: true, error: null};
        case GET_DISH_SUCCESS:
            return {...state, loading: false, error: null, dish: action.payload};
        case GET_DISH_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default editDishReducer;