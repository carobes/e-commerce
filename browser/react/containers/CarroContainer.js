import React from 'react';
import store from '../store'
import { fetchItemsInCart } from '../action-creators/carrito'
import Carro from '../components/Carro';
import InputDataToGenOrder from '../components/data_for_gen_order';

import { Grid } from '@material-ui/core'

let id = 0;
function createData(name, precio, cantidad) {
  id += 1;
  let subtotal = cantidad * precio;
  return { id, name, precio, cantidad, subtotal};
}

const datos = [
  createData('Computador Portatil Lenovo', 1000, 1),
  createData('Camara Fotografica Cannon', 100, 1),
  createData('Bolso Playero', 200, 1),
  createData('Pedazo de Bosta', 1, 1),
  createData('Camisa con mangas largas JH', 200, 1),
];

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class CarroContainer extends React.Component{
  constructor(props){
    super(props);
    //this.state = store.getState();
    this.state = {
      data: store.getState().carrito.list_items,
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
    let nuevo_total = 0;
    let data_length = this.state.data.length;
    for (let i=0; i < data_length; i++){
      nuevo_total = nuevo_total + this.state.data[i]['subtotal'];
    }
    this.setState({ total: nuevo_total });
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
        this.setState({data: store.getState().carrito.list_items});
    });
    store.dispatch(fetchItemsInCart(this.state.userId));
  }

  componentWillMount(){
    this.sumaTotal();
  }

  handleAdd = id => event => {
    let index = this.state.data.indexOf(this.state.data[id-1]);
    let nuevo_state_data = this.state.data.slice();
    nuevo_state_data[index]['cantidad']++;
    nuevo_state_data[index]['subtotal'] = nuevo_state_data[index]['precio'] * nuevo_state_data[index]['cantidad'];
    this.setState({ data: nuevo_state_data }, () => this.sumaTotal());
  }

  handleSubstract = id => event => {
    let index = this.state.data.indexOf(this.state.data[id-1]);
    let nuevo_state_data = this.state.data.slice();
    if (nuevo_state_data[index]['cantidad'] > 1){
      nuevo_state_data[index]['cantidad']--;
      nuevo_state_data[index]['subtotal'] = nuevo_state_data[index]['precio'] * nuevo_state_data[index]['cantidad'];
      this.setState({ data: nuevo_state_data }, () => this.sumaTotal());
    }
  }

  handleDrop = id => event => {
    let nuevo_state_data = this.state.data.slice();
    if (nuevo_state_data.length === 1) nuevo_state_data = [];
    nuevo_state_data.splice(id-1, 1);
    console.log(nuevo_state_data);
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
    console.log('Generar orden de compra con el arreglo de Productos : ', this.state.data);
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  render(){
    console.log('Data q trae el REDUX: ',this.state.data);
    return (
      <div>
        <Carro data={this.state.data} address={this.state.address} total={this.state.total} handleAdd={this.handleAdd} handleSubstract={this.handleSubstract} handleDrop={this.handleDrop} genOrder={this.genOrder} emailFlag={this.state.emailFlag}/>
        <InputDataToGenOrder handleChange={this.handleChange} emailFlag={this.state.emailFlag}/>
      </div>
    );
  }
}

export default CarroContainer;
