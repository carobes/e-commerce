import { RECEIVE_ORDERS, RECEIVE_ORDER } from '../constants';

const initialState = {
    orderList: [],
    selectedOrder: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_ORDERS:
            return Object.assign({}, state, {orderList: action.orders});
        case RECEIVE_ORDER:
            return Object.assign({}, state, {selectedOrder: action.order});
        default:
            return state;
    }
}