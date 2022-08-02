    import axiosApi from "../../axiosApi";

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, payload: error});

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