export const DISHES_REQUEST = 'DISHES_REQUEST';
export const DISHES_SUCCESS = 'DISHES_SUCCESS';
export const DISHES_FAILURE = 'DISHES_FAILURE';

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = dishes => ({type: DISHES_SUCCESS, payload: dishes});
export const dishesFailure = error => ({type: DISHES_FAILURE, payload: error});