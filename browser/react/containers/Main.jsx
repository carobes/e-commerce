import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Login } from '../components/Loggin';
import withStyles from '../components/Loggin'



export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}