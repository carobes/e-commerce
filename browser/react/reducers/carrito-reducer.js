import { ITEMS_IN_CART, CURRENT_TOTAL } from '../constants';

const initialState = {
    list_items : [],
    total : 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ITEMS_IN_CART:
            return Object.assign({}, state, {list_items: action.items});
        case CURRENT_TOTAL:
            return Object.assign({}, state, {total: action.total})
        default:
            return state;
    }
}
