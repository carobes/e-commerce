import React from 'react';
import Appbar from '../components/Appbar'
import Products from '../components/Products'

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Appbar />
            
            <br />
            
                <Products />
            </div>
        )
    }
}