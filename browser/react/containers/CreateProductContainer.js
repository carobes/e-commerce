import React from 'react';
import { connect } from 'react-redux'; 
import CreateProduct from '../components/CreateProduct'
import { withRouter } from 'react-router'
import { fetchCategories } from '../action-creators/categories'

const mapStateToProps = ({categories}) => ({
    categories: categories.categoriesList,
  })
  
const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories())
})


class CreateProductContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }
    
    render() {
        return <CreateProduct categList={this.props.categories} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateProductContainer))
