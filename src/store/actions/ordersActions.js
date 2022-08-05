import axiosApi from "../../axiosApi";

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE';

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, payload: error});

export const getOrderRequest = () => ({type: GET_ORDER_REQUEST});
export const getOrderSuccess = orders => ({type: GET_ORDER_SUCCESS, payload: orders});
export const getOrderFailure = error => ({type: GET_ORDER_FAILURE, payload: error});

export const createOrder = orderData => {
  return async dispatch => {
    try{
        dispatch(orderRequest());
        await axiosApi.post('/orders.json', orderData);
        dispatch(orderSuccess());
    } catch (error){
        dispatch(orderFailure(error));
        throw error;
    }
  };
};

export const getOrders = () => {
    return async dispatch => {

        try {
            dispatch(getOrderRequest());
            const response = await axiosApi('/orders.json')
            if (response.data) {
                dispatch(getOrderSuccess(response.data));
            } else {
                dispatch(getOrderSuccess(null));
            }
        } catch (error){
            dispatch(getOrderFailure(error));
            throw error;
        }
    };
};


