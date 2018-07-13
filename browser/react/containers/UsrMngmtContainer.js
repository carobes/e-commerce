import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch, clearSelectedUser } from '../action-creators/users';
import UsrMngmt from '../components/UsrMngmt';
import axios from 'axios'


const mapStateToProps = ({ users }) => ({
    selectedUser: users.selectedUser,
    loggedUser: users.loggedUser
})

const mapDispatchToProps = (dispatch) => ({
    fetchSearch: (input) => dispatch(fetchSearch(input)),
    clearSelectedUser: () => dispatch(clearSelectedUser())
})


class UsrMngmtContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            admin: false
        }
        this.setSearch = this.setSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    };

    setSearch(e) {
        this.setState({ search: e.target.value })
    };

    handleSubmit(e) {
        e.preventDefault()
        Promise.resolve(this.props.fetchSearch(this.state.search))
            .then(()=>this.setState({admin:this.props.selectedUser.admin}))
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        axios.put('/api/users/adminupdate',{admin:event.target.checked,userId: this.props.selectedUser.id})
    };

    handleDelete (){
        axios.delete(`/api/users/delete/${this.props.selectedUser.id}`)
        .then(()=> this.props.clearSelectedUser())
        .then(()=> this.setState({search:''}))
    }

    render() {
        return (
        <div>
        {!this.props.loggedUser.id ? <div>Tenes que ser admin para estar acá</div> :
        <UsrMngmt selectedUser={this.props.selectedUser.id !== this.props.loggedUser.id ? this.props.selectedUser : {}} setSearch={this.setSearch} search={this.state.search} handleSubmit={this.handleSubmit} handleChange={this.handleChange} admin={this.state.admin} handleDelete={this.handleDelete}/>}
        </div> 
        )}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsrMngmtContainer);