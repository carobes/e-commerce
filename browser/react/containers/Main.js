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
import CreateProductContainer from './CreateProductContainer';
import CarroContainer from './CarroContainer'
import OrdersContainer from './OrdersContainer'
import UsrMngmtContainer from './UsrMngmtContainer';
import { fetchItemsInCart } from '../action-creators/carrito'
import { connect } from 'react-redux';

const style = {
    button:{
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
};

const mapStateToProps = ({ users, carrito }) => ({
    loggedUser: users.loggedUser,
    numElemsCarro: carrito.list_items
})

const mapDispatchToProps = (dispatch) => ({
    itemsInCart: (id) => dispatch(fetchItemsInCart(id)),
    unlogUser: () => dispatch(unlogUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        enabled: false
      }
    }

    
    render() {
        const {classes} = this.props
      let num_items = this.props.numElemsCarro.length;
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
                <Appbar num_elems_carro={this.props.numElemsCarro.length} loggedUser={this.props.loggedUser} unlogUser={this.props.unlogUser} enabled={this.state.enabled}/>
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
                        exact path='/users/admin' render={() =>
                            <UsrMngmtContainer />
                        } />
                    <Route
                        exact path='/orders/single/:id' render={() =>
                            <SingleOrderContainer />
                        } />
                    <Route
                        exact path='/orders/:userId?' render={() =>
                            <OrdersContainer />
                        } />
                    <Redirect from="/" to="/products" />
                </Switch>
                {(this.props.loggedUser.admin)?<Button variant="fab" color="primary" aria-label="add" className={classes.button} component={Link} to={'/products/admin/new'}>
                    <AddIcon />
                </Button>:null}
            </div>
        )
    }
}))
