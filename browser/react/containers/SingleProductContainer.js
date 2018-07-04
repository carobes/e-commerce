import React from 'react';
import store from '../store'
import SingleProduct from '../components/SingleProduct'
import { fetchProduct } from '../action-creators/products'
import { withRouter } from 'react-router'

export default withRouter(class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
        store.dispatch(fetchProduct(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return <SingleProduct product={this.state.products.selectedProduct} />
    }
})