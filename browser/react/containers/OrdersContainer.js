import React from 'react';
import { connect } from 'react-redux'; 
import Orders from '../components/Orders'
import { fetchOrders } from '../action-creators/orders'
import { withRouter } from 'react-router'

const mapStateToProps = ({ orders }) => ({
    orderList: orders.orderList,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchOrders: (id) => dispatch(fetchOrders(id))
  })

class OrdersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOrders(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        console.log(this.props.orderList)
        return <Orders orders={this.props.orderList} />
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersContainer))