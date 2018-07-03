import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, SEARCH_INPUT } from '../constants';

const initialState = {
    productsList: [],
    selectedProduct: {},
    searchInput: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {productsList: action.products});
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {selectedProduct: action.product});
        case SEARCH_INPUT:
            return Object.assign({}, state, {searchInput: action.search})
        default:
            return state;
    }
}