import React from 'react';
import axios from 'axios';
import CreateCategory from '../components/CreateCategory'
import { connect } from 'react-redux';
import { fetchCategories } from '../action-creators/categories'

const mapStateToProps = ({ }) => ({
  })

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories()),
  })

class CreateCategoryContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            click: true,
            input: ''
        }
    
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    };
    


    handleClick(){
        this.setState({
            click: !this.state.click
        })
    }  

    handleChange(evt) {
        this.setState({
            input: evt.target.value
        })
    }

    handleSubmit(e) {
        if((e.charCode === 13 && this.state.input) || (e.type === 'click' && this.state.input)) {
        const category = {
            categoria: this.state.input
        }
        axios.post('/api/categories/new', category)
        .then(() => this.setState({
            input: ''
        }))
        .then(() => this.props.fetchCategories())
    }
    }


    render() {

        return (
            <CreateCategory click={this.state.click} input={this.state.input} handleClick={this.handleClick} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryContainer)