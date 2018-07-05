import React from 'react';
import { connect } from 'react-redux'; 
import SingleProduct from '../components/SingleProduct'
import { fetchProduct } from '../action-creators/products'
import { withRouter } from 'react-router'

const mapStateToProps = ({ products }) => ({
    selectedProduct: products.selectedProduct,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
  })


class SingleProductContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    }

    render() {
        console.log(this.props.selectedProduct)
        return <SingleProduct product={this.props.selectedProduct} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleProductContainer))
