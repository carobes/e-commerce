import axios from 'axios';
import { CURRENT_TOTAL, ITEMS_IN_CART } from '../constants';

const products_in_cart = (items) => ({
    type: ITEMS_IN_CART,
    items
});

export const current_total = (current_total) => ({
    type: CURRENT_TOTAL,
    current_total
})

export const fetchItemsInCart = (userId) => dispatch =>
    axios.get(`/api/carrito/${userId}`)
      .then(res => res.data)
      .then(items => dispatch(products_in_cart(items)));

export const updateItemInCart = (userId, itemId, cantidad) => dispatch =>
  axios.put(`/api/carrito`,{usuario: userId, producto: itemId, cantidad: cantidad})
    .then(res => true);
