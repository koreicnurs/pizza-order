import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import './index.css';
import dishesReducer from "./store/reducers/dishesReducer";
import dishReducer from "./store/reducers/addDishReducer";
import deleteDishReducer from "./store/reducers/deleteDishReducer";
import editDishReducer from "./store/reducers/editDishReducer";
import makeOrdersReducer from "./store/reducers/makeOrdersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    dishesCombine: dishesReducer,
    addDish: dishReducer,
    deleteDish: deleteDishReducer,
    editDish: editDishReducer,
    addOrder: makeOrdersReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
