import React from 'react';
<<<<<<< HEAD:browser/react/containers/Main.jsx
import ReactDOM from 'react-dom';
import Search from '../components/Search';


=======
import Appbar from '../components/Appbar'
>>>>>>> d76fd7f908eab17642d77c43daf3de4a6456015e:browser/react/containers/Main.js

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            products: []

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

        this.setState({ products: ["heladera 1", "heladera 2", "heladera 3"] })
        console.log(this.state.products)
        //     axios.get()
        //         .then((result) => {

        //             this.setState({
        //                 products: [],
        //                 search: ""
        //             })
        //             this.props.history.push('/search');
        //         });
    }


    render() {
        return (
            <div>
<<<<<<< HEAD:browser/react/containers/Main.jsx

                <Search setSearch={this.setSearch} search={this.state.search} handleSubmit={this.handleSubmit} />

=======
                <Appbar />
>>>>>>> d76fd7f908eab17642d77c43daf3de4a6456015e:browser/react/containers/Main.js
            </div>
        )
    }
}
