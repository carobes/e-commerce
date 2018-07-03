import React from 'react';
import Appbar from '../components/Appbar'
import SidebarContainer from '../containers/SidebarContainer';
import CarroContainer from '../containers/CarroContainer';

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
                <CarroContainer />
            </div>
        )
    }
}
