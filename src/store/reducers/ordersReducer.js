import {
    COMPLETE_ORDER_FAILURE,
    COMPLETE_ORDER_REQUEST, COMPLETE_ORDER_SUCCESS,
    GET_ORDER_FAILURE,
    GET_ORDER_REQUEST, GET_ORDER_SUCCESS,
    ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS
} from "../actions/ordersActions";

const initialState = {
    orders: [],
    loading: false,
    error: null,
    delivery: 150,
    total: 0,
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {...state, loading: true, error: null};
        case ORDER_SUCCESS:
            return {...state, loading: false, error: null};
        case ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        case COMPLETE_ORDER_REQUEST:
            return {...state, loading: true, error: null};
        case COMPLETE_ORDER_SUCCESS:
            return {...state, loading: false, error: null};
        case COMPLETE_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_ORDER_REQUEST:
            return {...state, loading: true, error: null};
        case GET_ORDER_SUCCESS:
            return {...state, loading: false, error: null, orders: action.payload};
        case GET_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default ordersReducer;