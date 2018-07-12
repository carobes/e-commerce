import React from 'react';
import { connect } from 'react-redux'; 
import Orders from '../components/Orders'
import { fetchOrders } from '../action-creators/orders'
import { withRouter } from 'react-router'
import axios from 'axios'

const mapStateToProps = ({ orders }) => ({
    orderList: orders.orderList,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchOrders: (id) => dispatch(fetchOrders(id))
  })

class OrdersContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            estados: [],
            orderMap:{},
            open:{}
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleClose = this.handleClose.bind(this)
        // this.handleOpen = this.handleOpen.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this) 
      }
    componentDidMount() {
        Promise.resolve(this.props.fetchOrders())
            .then((res)=>{
                var orderMap = {}
                for(var i=0; i<res.orders.length; i++){
                    orderMap[res.orders[i].id] = res.orders[i].status.id
                }
                this.setState({
                    orderMap:orderMap,
                    open: false
                })})
        axios.get("/api/orders/estados")
            .then(res => res.data)
            .then(estados => {
                this.setState({estados})})
        }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange = event => {
        var auxOM = Object.assign({},this.state.orderMap)
        auxOM[event.target.name] = event.target.value
        this.setState({orderMap:auxOM });
      };
    
    handleClose = event => {
        var auxOpen = Object.assign({},this.state.open)
        auxOpen[event.target.name] = false
        this.setState({ open: open });
    };

    handleOpen = () => {
        var auxOpen = Object.assign({},this.state.open)
        auxOpen[event.target.name] = true
        this.setState({ open: auxOpen });
    };

    render() {

        console.log(this.state.orderMap)
        return <Orders orders={this.props.orderList} estados={this.state.estados} handleChange={this.handleChange} handleClose={this.handleClose} handleOpen={this.handleOpen} open={this.state.open} orderMap={this.state.orderMap}/>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersContainer))