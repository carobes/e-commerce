import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Appbar from '../components/Appbar';
import ProductsContainer from './ProductsContainer';
import SidebarContainer from './SidebarContainer';
import { Grid } from '@material-ui/core';
import store from '../store'
import SingleProductContainer from './SingleProductContainer';
import SingleOrderContainer from './SingleOrderContainer';
import UserIdContainer from './UserIdContainer';
import CrearUsuario from './CrearUsuario';
import LoginForm from './LoginForm';
import CarroContainer from './CarroContainer';
import { fetchItemsInCart } from '../action-creators/carrito'

export default class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        userId: 2,
        num_elems_carro: store.getState().carrito.list_items, // traer el numero de elementos que existen en el carro de el usuario
      }
    }

    componentDidMount(){
      this.unsubscribe = store.subscribe(() => {
          this.setState({num_elems_carro: store.getState().carrito.list_items});
      });
      store.dispatch(fetchItemsInCart(this.state.userId));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.props.location.pathname === '/carro') {
          return (
            <div>
              <Appbar num_elems_carro={this.state.num_elems_carro.length}/>
              <br />
              <Grid container spacing={16}>
                <CarroContainer />
              </Grid>
            </div>
          )
        }
        return (
            <div>
                <Appbar num_elems_carro={this.state.num_elems_carro.length} loggedUser={this.props.loggedUser} unlogUser={this.props.unlogUser}/>
                <br />
                <Grid container spacing={16}>
                    <Grid item xs={2}>
                        <SidebarContainer />
                    </Grid>
                    <Grid item xs={10}>
                        <Switch>
                            <Route
                                exact path='/products' render={() =>
                                    <ProductsContainer />
                                } />
                            <Route
                                exact path='/products/:id' render={() =>
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
                            <Redirect from="/" to="/products" />
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
