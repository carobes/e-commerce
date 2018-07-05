import React from 'react';
import { connect } from 'react-redux'; 
import CreateProduct from '../components/CreateProduct'
import { withRouter } from 'react-router'

const mapStateToProps = ({ categories }) => ({
    categories: categories.categoriesList,
  })
  


class CreateProductContainer extends React.Component {

    render() {
        return <CreateProduct categList={this.props.categories} />
    }
}

export default connect(mapStateToProps)(withRouter(CreateProductContainer))
