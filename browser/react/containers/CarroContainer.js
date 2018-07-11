import React from 'react';
import store from '../store'
import { fetchItemsInCart, updateItemInCart } from '../action-creators/carrito'
import Carro from '../components/Carro';
import InputDataToGenOrder from '../components/data_for_gen_order';

import { Grid } from '@material-ui/core'

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class CarroContainer extends React.Component{
  constructor(props){
    super(props);
    //this.state = store.getState();
    this.state = {
      data: store.getState(),
      total: 0,
      email: '',
      address: '',
      userId: 2,
      emailFlag: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubstract = this.handleSubstract.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.sumaTotal = this.sumaTotal.bind(this);
    this.genOrder = this.genOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sumaTotal(){
    let total = 0;
    let data_length = this.state.data.carrito.list_items.length;
    for (let i=0; i < data_length; i++){
      total = total + (this.state.data.carrito.list_items[i]['carrito']['cantidad'] * this.state.data.carrito.list_items[i]['precio']);
    }
    return total;
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
        this.setState({data: store.getState()});
    });
    store.dispatch(fetchItemsInCart(this.state.userId));
  }

  handleAdd = id => event => { // debo llamar la ruta para actualizar un item en carrito
    store.dispatch(updateItemInCart('increment', this.state.userId, this.state.data.carrito.list_items[id].carrito.productoId));

  }

  handleSubstract = id => event => { // debo llamar la ruta para actualizar un item en carrito
    store.dispatch(updateItemInCart('decrement', this.state.userId, this.state.data.carrito.list_items[id].carrito.productoId));
  
  }

  handleDrop = id => event => { // debo llamar la ruta para actualizar un item en carrito
    let nuevo_state_data = this.state.data.carrito.list_items.slice();
    if (nuevo_state_data.length === 1) nuevo_state_data = [];
    nuevo_state_data.carrito.list_items.splice(id, 1);
    this.setState({ data: nuevo_state_data }, () => this.sumaTotal());
  }

  handleChange = event => {
    const string = event.target.value;
    const key = event.target.id;
    if (key === 'input-email'){
      this.setState({emailFlag: validateEmail(string)});
    }else{
      this.setState({address: string});
    }
  }

  genOrder = event => {
    console.log('Generar orden de compra con el arreglo de Productos : ', this.state.data.carrito.list_items);
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  render(){
    if (this.state.data.carrito.list_items.length === 0){
      return (
        <div>
          <h1>CARRO VACIO</h1>
        </div>
      )
    }
    return (
      <div>
        <Carro data={this.state.data.carrito.list_items} address={this.state.address} sumaTotal={this.sumaTotal} total={this.state.total} handleAdd={this.handleAdd} handleSubstract={this.handleSubstract} handleDrop={this.handleDrop} genOrder={this.genOrder} emailFlag={this.state.emailFlag}/>
        <InputDataToGenOrder handleChange={this.handleChange} emailFlag={this.state.emailFlag}/>
      </div>
    );
  }
}

export default CarroContainer;
