import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../action-creators/products'
import Products from '../components/Products'
import { withRouter } from 'react-router'


const mapStateToProps = ({ products, categories }) => ({
    productsList: products.productsList,
    selectedCategories: categories.selectedCategories
})

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})


class ProductsContainer extends React.Component {

    componentDidMount() {
        if (!this.props.match.params.search) return this.props.fetchProducts()
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

        return <Products products={productListFiltered} />
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsContainer));