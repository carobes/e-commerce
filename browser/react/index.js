import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './containers/Main';
import SidebarContainer from './containers/SidebarContainer';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={SidebarContainer } />
    </BrowserRouter>,
    document.getElementById('app')
);
