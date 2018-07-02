import axios from 'axios';
import { RECEIVE_USER } from '../constants';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = id => dispatch =>
    axios.get('COMPLETAR LA RUTA/${id}')
        .then(res => res.data)
        .then(user => dispatch(receiveUser(user)))
