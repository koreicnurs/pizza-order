import {ADD_DISH_FAILURE, ADD_DISH_REQUEST, ADD_DISH_SUCCESS} from "../actions/addDishActions";

const initialState = {
    loading: false,
    error: null
};

const dishReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_DISH_REQUEST:
            return {...state, loading: true, error: null};
        case ADD_DISH_SUCCESS:
            return {...state, loading: false, error: null};
        case ADD_DISH_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default dishReducer;