import React from 'react';
import store from '../store'
import IdUser from '../components/IdUser'
import { fetchUser } from '../action-creators/users'
import { withRouter } from 'react-router'

export default withRouter(class UserIdContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
        store.dispatch(fetchUser(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return <IdUser user={this.state.users.selectedUser} />
    }
})