import React from 'react';
import Carro from '../components/Carro';

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

class CarroContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: datos,
      total: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubstract = this.handleSubstract.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.sumaTotal = this.sumaTotal.bind(this);
    this.genOrder = this.genOrder.bind(this);
  }

  sumaTotal(){
    let nuevo_total = 0;
    let data_length = this.state.data.length;
    for (let i=0; i < data_length; i++){
      nuevo_total = nuevo_total + this.state.data[i]['subtotal'];
    }
    this.setState({ total: nuevo_total });
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

  genOrder = event => {
    console.log('Generar orden de compra con el arreglo de Productos : ', this.state.data);
  }

  render(){
    return (
      <Carro data={this.state.data} total={this.state.total} handleAdd={this.handleAdd} handleSubstract={this.handleSubstract} handleDrop={this.handleDrop} genOrder={this.genOrder}/>
    );
  }
}

export default CarroContainer;
