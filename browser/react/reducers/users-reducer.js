import { RECEIVE_USER, LOGGED_USER, UNLOG_USER, CLEAR_USER } from '../constants';

const initialState = {
    selectedUser: {},
    loggedUser: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, {selectedUser: action.user});
        case CLEAR_USER:
            return Object.assign({},state,{selectedUser:{}})
        case LOGGED_USER:
            return Object.assign({}, state, {loggedUser: action.user});
        case UNLOG_USER:
            return Object.assign({}, state, {loggedUser: {}})
        default:
            return state;
    }
}