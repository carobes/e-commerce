import axios from 'axios';
import { RECEIVE_CATEGORIES, CATEGORIES_SELECTED } from '../constants';

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const categoriesSelected = (selectedCat) => ({
    type: CATEGORIES_SELECTED,
    selectedCat
})

export const fetchCategories = () => dispatch =>
    axios.get('/api/products/categories')
        .then(res => res.data)
        .then(resp => resp)
        .then(categories => {
            return dispatch(receiveCategories(categories))
        });



