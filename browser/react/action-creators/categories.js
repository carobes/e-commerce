import axios from 'axios';
import { RECEIVE_CATEGORIES, CATEGORIES_SELECTED } from '../constants';

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const categoriesSelected = (catsel) => ({
    type: CATEGORIES_SELECTED,
    catsel
})

export const fetchCategories = () => dispatch =>
    axios.get('/api/categories')
        .then(res => res.data)
        .then(categories => dispatch(receiveCategories(categories)));



