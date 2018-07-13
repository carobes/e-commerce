import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SingleProduct from '../components/SingleProduct'
import Reviews from '../components/Reviews'
import { fetchProduct } from '../action-creators/products'
import { withRouter } from 'react-router'




const mapStateToProps = ({ products }) => ({
    selectedProduct: products.selectedProduct,
})

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
})


class SingleProductContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coment: ""
        }
        this.setComent = this.setComent.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    setComent(e) {
        this.setState({ coment: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const newComent = this.state.coment
        this.setState({ coment: "" })

        axios.post('/api/reviews/new', { comentario: newComent, productId: this.props.selectedProduct.id })
            .then(result => {
                this.props.fetchProduct(this.props.match.params.id)
            })

    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    }
    render() {

        const reviewsList = this.props.selectedProduct.reviews

        return (
            <div>
                <SingleProduct product={this.props.selectedProduct} />

                <Reviews reviews={reviewsList} setComent={this.setComent} coment={this.state.coment} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleProductContainer));
