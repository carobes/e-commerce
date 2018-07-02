import { RECEIVE_USER } from '../constants';

const initialState = {
    selectedUser: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, {selectedUser: action.user});
        default:
            return state;
    }
}