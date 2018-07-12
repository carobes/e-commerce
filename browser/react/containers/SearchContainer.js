import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch, fetchProducts } from '../action-creators/products'
import { withRouter } from 'react-router'
import Search from '../components/Search'

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
    fetchSearch: (input) => dispatch(fetchSearch(input)),
    fetchProducts: () => dispatch(fetchProducts())
})

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.setSearch = this.setSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    setSearch(e) {
        this.setState({ search: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.search === '') {
            this.props.history.push('/products')
        } else {
            this.props.fetchSearch(this.state.search).then(() => this.props.history.push('/products'))
        }

    }


    render() {
        return < Search setSearch={this.setSearch} search={this.state.search} handleSubmit={this.handleSubmit} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchContainer))
