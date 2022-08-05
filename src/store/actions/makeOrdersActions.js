export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

export const addOrder = type => ({type: ADD_ORDER, payload: type});
export const deleteOrder = (type, id) => ({type: DELETE_ORDER, payload: {price: type.price, allPrice: type.allPrice, id: id}});


