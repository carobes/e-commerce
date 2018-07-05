import React from 'react';
import Sidebar from '../components/Sidebar';

class SidebarContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categorias: {
        herramientas: true,
        tecnologia: true,
        vestimenta: false,
        calzado: true
      },
      filtros: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    const valor = event.target.checked;
    let nuevoValorEtiqueta = {};
    nuevoValorEtiqueta[name] = valor;
    const nuevoStateCategorias = Object.assign({}, this.state.categorias, nuevoValorEtiqueta);
    this.setState({ categorias: nuevoStateCategorias });
  };

  handleSubmit = event => {
    event.preventDefault();
    const categorias = this.state.categorias;
    let filtros_arr = Object.keys(categorias).filter( categoria => {if (categorias[categoria]) return categoria});
    this.setState({ filtros: filtros_arr }, () => console.log(this.state.filtros));
  };

  render() {
    return (
      <Sidebar categorias={this.state.categorias} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}

export default SidebarContainer;
