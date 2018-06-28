import React from 'react';
<<<<<<< HEAD:browser/react/containers/Main.jsx
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { Login } from '../components/Login';
import Carrito from '../components/Carrito';



=======
import Appbar from '../components/Appbar'
>>>>>>> cdfd52ac7c2360c51ac1775bc8951808f9c546e3:browser/react/containers/Main.js

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
<<<<<<< HEAD:browser/react/containers/Main.jsx
                <Login />
                <Carrito />
=======
                <Appbar />
>>>>>>> cdfd52ac7c2360c51ac1775bc8951808f9c546e3:browser/react/containers/Main.js
            </div>
        )
    }
}