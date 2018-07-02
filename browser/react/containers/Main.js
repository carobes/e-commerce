import React from 'react';
import Appbar from '../components/Appbar'
import SidebarContainer from '../containers/SidebarContainer';
import Carro from '../components/Carro';

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
                <Carro />
            </div>
        )
    }
}
