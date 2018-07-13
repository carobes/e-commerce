import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, categoriesSelected } from '../action-creators/categories'
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ categories, users }) => ({
  categoriesList: categories.categoriesList,
  selectedCategories: categories.selectedCategories,
  loggedUser: users.loggedUser
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  categoriesSelected: (selectedCat) => dispatch(categoriesSelected(selectedCat))
})

class SidebarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      catCheckBox: {
      }
    }
  }

  handleChange = name => event => {
    const valor = event.target.checked;
    let auxObj = {};
    auxObj[name] = valor;
    const nuevoStateCheck = Object.assign({}, this.state.catCheckBox, auxObj);
    this.setState({ catCheckBox: nuevoStateCheck });
    const arrAux = this.props.selectedCategories
    if (valor) {
      arrAux.push(name)
      this.props.categoriesSelected(arrAux)
    } else {
      var indice = arrAux.indexOf(name)
      arrAux.splice(indice, 1)
      this.props.categoriesSelected(arrAux)
    }
  };
  componentDidMount() {
    this.props.fetchCategories()
      .then(data => {
        const auxObj = {}
        data.categories.map(cat => {
          auxObj[cat.categoria] = true
        })
        this.setState({ catCheckBox: auxObj })
        return data.categories.map(cat => cat.categoria)
      })
      .then(data => {
        this.props.categoriesSelected(data)
      })
  }

  render() {
    return (
      <Sidebar categories={this.props.categoriesList} catCheckBox={this.state.catCheckBox} handleChange={this.handleChange} admin={this.props.loggedUser.admin} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)

