import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { Login } from '../components/Login';
import Carrito from '../components/Carrito';




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
                <Carrito />
            </div>
        )
    }
}