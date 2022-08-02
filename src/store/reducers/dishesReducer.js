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

export const getDishes = () => {
  return async dispatch => {

    try {
      dispatch(dishesRequest());
      const response = await axios('https://bn-task-63-default-rtdb.europe-west1.firebasedatabase.app/dishes.json')
      console.log(response.data);
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

export default dishesReducer;