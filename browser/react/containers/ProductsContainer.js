import React from 'react';
import store from '../store'
import { fetchProducts } from '../action-creators/products'
import Products from '../components/Products'

export default class ProductsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
        store.dispatch(fetchProducts());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return <Products products={this.state.products.productsList} />
    }

}