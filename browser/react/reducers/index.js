import { combineReducers } from 'redux';
import categoriesReducer from './categories-reducer';
import ordersReducer from './orders-reducer';
import productsReducer from './products-reducer';
import usersReducer from './users-reducer';

export default combineReducers({
    categories: categoriesReducer,
    orders: ordersReducer,
    products: productsReducer,
    users: usersReducer
})