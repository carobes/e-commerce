import React from 'react';
import store from '../store'
import Input from '../components/Input'
import { fetchSearch } from '../action-creators/products'
import { withRouter } from 'react-router'


export default withRouter(class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }

        this.setSearch = this.setSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    setSearch(e) {
        console.log(this.state.search)
        this.setState({ search: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        store.dispatch(fetchSearch(this.state.search));
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return < Search setSearch={setSearch} search={search} handleSubmit={handleSubmit} />
    }
})