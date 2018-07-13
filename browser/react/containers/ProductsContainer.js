import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../action-creators/products'
import Products from '../components/Products'
import { withRouter } from 'react-router'
import axios from 'axios';
import { fetchItemsInCart } from '../action-creators/carrito'


const mapStateToProps = ({ products, categories, users }) => ({
    productsList: products.productsList,
    selectedCategories: categories.selectedCategories,
    userId: users.loggedUser.id
})

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchItemsInCart: (id) => dispatch(fetchItemsInCart(id))
})

class ProductsContainer extends React.Component {
    constructor(props){
      super(props);
      this.handleAddItemInCart = this.handleAddItemInCart.bind(this);
    }

    componentDidMount() {
        if (!this.props.match.params.search) return this.props.fetchProducts()
    }

    handleAddItemInCart = (itemId) => (event) => {
        event.preventDefault()
      let product_to_add = {
        usuario: this.props.userId,
        producto: itemId,
        cantidad: 1,
      };
      if (product_to_add.usuario) {
        axios.post('/api/carrito', product_to_add)
        .then(() => this.props.fetchItemsInCart(this.props.userId))
        .catch(err => console.log('Ya existe este item'));
      }
      else console.log('No esta loggeado'); // hacer que se guarde en la memoria del navegador.
    }

    render() {
        var productListFiltered = []
        if (this.props.productsList.length && this.props.productsList[0].Category[0].categoria) {
            this.props.productsList.map(product => {
                for (var i = 0; i < product.Category.length; i++) {
                    product.Category[i] = product.Category[i].categoria
                }
            })
        }
        productListFiltered = this.props.productsList.filter(prod => this.props.selectedCategories.some(cat => prod.Category.includes(cat)))

        return <Products products={productListFiltered} handleAddItemInCart={this.handleAddItemInCart} />
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsContainer));
