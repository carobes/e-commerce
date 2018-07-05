import React from 'react';
import store from '../store'
import SingleOrder from '../components/SingleOrder'
import { fetchOrder } from '../action-creators/orders'
import { withRouter } from 'react-router'

export default withRouter(class SingleOrderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
        store.dispatch(fetchOrder(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return <SingleOrder order={this.state.orders.selectedOrder} />
    }
})