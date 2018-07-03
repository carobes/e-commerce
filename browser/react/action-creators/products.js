import axios from 'axios';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, SEARCH_INPUT } from '../constants';

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
});

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const searchInput = (search) => ({
    type: SEARCH_INPUT,
    search
})

export const fetchProducts = () => dispatch =>
<<<<<<< HEAD
    axios.get('COMPLETAR LA RUTA')
=======
    axios.get('/api/products')
>>>>>>> 07c5227a45ba9199aa6f0b4c6fae16e7d9df4589
        .then(res => res.data)
        .then(products => dispatch(receiveProducts(products)));

export const fetchProduct = id => dispatch =>
    axios.get('COMPLETAR LA RUTA/${id}')
        .then(res => res.data)
        .then(product => dispatch(receiveProduct(product)));