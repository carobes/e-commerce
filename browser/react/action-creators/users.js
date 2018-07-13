import axios from 'axios';
import { RECEIVE_USER, LOGGED_USER, UNLOG_USER, CLEAR_USER } from '../constants';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const loggedUser = (user) => ({
    type: LOGGED_USER,
    user
})

export const clearSelectedUser = () => ({
    type: CLEAR_USER,
})

export const fetchUser = id => dispatch =>
    axios.get(`/api/users/${id}`)
        .then(res => res.data)
        .then(user => dispatch(receiveUser(user)))

export const logUser = id => dispatch =>
    axios.get(`/api/users/${id}`)
        .then(res => res.data)
        .then(user => dispatch(loggedUser(user)))

export const unlogUser = () => dispatch =>
    axios.get('/api/logout')
        .then(data => dispatch({type: UNLOG_USER}))

export const fetchSearch = input => dispatch =>
    axios.get(`/api/users/search/${input}`)
        .then(res => res.data)
        .then(user => {if (user) return dispatch(receiveUser(user))});
