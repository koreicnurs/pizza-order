import {
  DISHES_FAILURE,
  DISHES_REQUEST,
  DISHES_SUCCESS,
  dishesFailure,
  dishesRequest,
  dishesSuccess
} from "../actions/dishesActions";
import axios from "axios";

const initialState = {
  dishes: null,
  loading: false,
  error: null,
};

const dishesReducer = (state = initialState, action) => {
  switch (action.type){
    case DISHES_REQUEST:
      return {...state, loading: true, error: null};
    case DISHES_SUCCESS:
      return {...state, loading: false, error: null, dishes: action.payload};
    case DISHES_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default dishesReducer;