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
            open:{},
            filterUser:0,
            filter: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handdleFilter = this.handleFilter.bind(this)
        // this.handleClose = this.handleClose.bind(this)
        // this.handleOpen = this.handleOpen.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
      }
    componentDidMount() {
        if (this.props.match.params.userId) {
            this.setState({filterUser:this.props.match.params.userId})
        }
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

    handleChange = event => {
        var auxOM = Object.a
        router.get('/user/:id', function (req, res) {
          console.log("entro en el axios")
          Ordenes.findOne({
               where: { id: req.params.id },
               include: [ProductosOrden, { model: Estado, as:'status' }, { model: Users, as:'usuario' }]
           })
               .then(orden => {console.log("orden en el axios", orden);res.json(orden)});
        });ssign({},this.state.orderMap)
        auxOM[event.target.name] = event.target.value
        this.setState({orderMap:auxOM });
      };
    
    handleFilter = event => {
        event.preventDefault()
        this.setState({filter: event.target.value})
    }
    
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
    handleSubmit = ({orderId,statusId}) => {
        axios.put('/api/orders/estados', ({
            orderId,
            statusId
            }))
            .then(()=> this.props.fetchOrders())
        }

    render() {
        var auxOrderList = this.state.filter === 0 ? this.props.orderList : this.props.orderList.filter(order => order.statusId === this.state.filter )
        auxOrderList = this.state.filterUser === 0 ? auxOrderList : auxOrderList.filter(order => order.usuarioId == this.state.filterUser)
        return <Orders orders={auxOrderList} estados={this.state.estados} handleChange={this.handleChange} handleClose={this.handleClose} handleOpen={this.handleOpen} open={this.state.open} orderMap={this.state.orderMap} handleSubmit={this.handleSubmit} handleFilter={this.handleFilter} filter={this.state.filter}/>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersContainer))