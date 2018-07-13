import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Appbar from '../components/Appbar'
import ProductsContainer from './ProductsContainer'
import SidebarContainer from './SidebarContainer'
import { Grid, Button, withStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SingleProductContainer from './SingleProductContainer'
import SingleOrderContainer from './SingleOrderContainer'
import UserIdContainer from './UserIdContainer'
import CrearUsuario from './CrearUsuario'
import LoginForm from './LoginForm'
import SingleOrder from '../components/SingleProduct'
import CreateProductContainer from './CreateProductContainer';
import CarroContainer from './CarroContainer'
import OrdersContainer from './OrdersContainer'
import { fetchItemsInCart } from '../action-creators/carrito'
import store from '../store'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

export default withStyles(style)(class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        userId: store.getState().users.loggedUser.id,
        num_elems_carro: [], // traer el numero de elementos que existen en el carro de el usuario
        enabled: false
      }
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.setState({
              num_elems_carro: store.getState().carrito.list_items
            })
          });
        if (this.state.userId) store.dispatch(fetchItemsInCart(this.state.userId));
        if (this.state.userId) this.setState({enabled: true});
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {classes} = this.props
      let num_items = this.state.num_elems_carro.length;
        if (this.props.location.pathname === '/carro') { // si esta logeado o no ...
          return (
            <div>
              <Appbar num_elems_carro={num_items}/>
              <br />
              <Grid container spacing={16}>
                <CarroContainer />
              </Grid>
            </div>
          )
        }
        return (
            <div>
                <Appbar num_elems_carro={this.state.num_elems_carro.length} loggedUser={this.props.loggedUser} unlogUser={this.props.unlogUser} enabled={this.state.enabled}/>
                <br />
                <Switch>
                    <Route
                        exact path='/products/:search?' render={() =>
                            <Grid container spacing={16}>
                                <Grid item xs={2}>
                                    <SidebarContainer />
                                </Grid>
                                <Grid item xs={10}>
                                    <ProductsContainer />
                                </Grid>
                            </Grid>
                        } />
                    <Route
                        exact path='/products/admin/new' render={() =>
                            <CreateProductContainer />
                        } />
                    <Route
                        exact path='/products/single/:id' render={() =>
                            <SingleProductContainer />
                        } />
                    <Route
                        exact path='/accounts/user/:id' render={() =>
                            <UserIdContainer />
                        } />
                    <Route
                        exact path='/login' render={() =>
                            <LoginForm />
                        } />
                    <Route
                        exact path='/accounts/new' render={() =>
                            <CrearUsuario />
                        } />
                    <Route
                        exact path='/orders/:id' render={() =>
                            <SingleOrderContainer />
                        } />
                    <Route
                        exact path='/orders' render={() =>
                            <OrdersContainer />
                        } />
                    <Redirect from="/" to="/products" />
                </Switch>
                <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                    <AddIcon />
                </Button>
            </div>
        )
    }
})
