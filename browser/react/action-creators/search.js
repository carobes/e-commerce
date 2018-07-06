
import { SEARCH_PRODUCTS } from '../constants';

const searchProducts = (products) => ({
    type: SEARCH_PRODUCTS,
    products
});
