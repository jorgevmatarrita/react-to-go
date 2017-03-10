// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';
// Page Components.
import { Home } from 'routes';

const plugins = [
    pushStateLocationPlugin,
];

const routes = [
     {
        name: 'home',
        url: '/',
        component: Home,
    }
];


ReactDOM.render(
    <UIRouter plugins={plugins} states={routes} >
        <UIView />
    </UIRouter>,
    document.getElementById('ui-view')
);