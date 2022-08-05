import {ADD_ORDER, DELETE_ORDER} from "../actions/makeOrdersActions";

const initialState = {
    countOrders: [],
    placeOrders: [],
    totalPrice: 0,
    error: null,
    loading: false,
};

const makeOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            if (!state.countOrders[action.payload.id]) {
                return {
                    ...state,
                    countOrders: {
                        ...state.countOrders,
                        [action.payload.id]: {
                            title: action.payload.title,
                            price: Number(action.payload.price),
                            allPrice: Number(action.payload.price),
                            count: 1
                        }
                    },
                    placeOrders: {
                        ...state.placeOrders,
                        [action.payload.id]: 1
                    }
                };
            } else {
                return {
                    ...state,
                    countOrders: {
                        ...state.countOrders,
                        [action.payload.id]: {
                            title: action.payload.title,
                            price: Number(action.payload.price),
                            allPrice: Number(action.payload.price) + Number(action.payload.price * state.countOrders[action.payload.id].count),
                            count:  state.countOrders[action.payload.id].count + 1
                        }
                    },

                    placeOrders: {
                        ...state.placeOrders,
                        [action.payload.id]: state.placeOrders[action.payload.id] + 1
                    }
                };
            }

        case DELETE_ORDER:
            return {
                ...state,
                countOrders: {
                    ...state.countOrders,
                    [action.payload.id]: {
                        title: state.countOrders[action.payload.id].title,
                        price: state.countOrders[action.payload.id].price,
                        allPrice: action.payload.allPrice - action.payload.price,
                        count:  state.countOrders[action.payload.id].count - 1
                    }
                },
                placeOrders: {
                    ...state.placeOrders,
                    [action.payload.id]: state.placeOrders[action.payload.id] - 1
                }
            };

        default:
            return state;
    }
};

export default makeOrdersReducer;