import React from 'react';
import { connect } from 'react-redux'; 
import SingleOrder from '../components/SingleOrder'
import { fetchOrder } from '../action-creators/orders'
import { withRouter } from 'react-router'


const mapStateToProps = ({ orders }) => ({
    selectedOrder: orders.selectedOrder,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchOrder: (id) => dispatch(fetchOrder(id))
  })
class SingleOrderContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOrder(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        console.log(this.props.selectedOrder)
        return <SingleOrder order={this.props.selectedOrder} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleOrderContainer))
