import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, SEARCH_PRODUCTS } from '../constants';

const initialState = {
    productsList: [],
    selectedProduct: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, { productsList: action.products });
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, { selectedProduct: action.product });
        case SEARCH_PRODUCTS:
            return Object.assign({}, state, { productsList: action.products });
        default:
            return state;
    }
}