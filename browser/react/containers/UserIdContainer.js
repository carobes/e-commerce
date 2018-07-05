import React from 'react';
import { connect } from 'react-redux';
import IdUser from '../components/IdUser'
import { fetchUser } from '../action-creators/users'
import { withRouter } from 'react-router'

const mapStateToProps = ({ users }) => ({
    selectedUser: users.selectedUser,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id))
})


class UserIdContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        return <IdUser user={this.props.selectedUser} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserIdContainer))
