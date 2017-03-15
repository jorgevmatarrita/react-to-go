// Dependencies.
import React from 'react';
import Provider from 'react-redux';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';
// Store.
import Store from 'app/redux';
// Route Components.
import { Home, About } from 'app/views';
// App Components.
import { Header } from 'app/components';

const plugins = [
    pushStateLocationPlugin,
];

const routes = [
     {
        name: 'home',
        url: '/',
        component: Home,
    },
    {
        name: 'about',
        url: '/about',
        component: About,
    }
];


ReactDOM.render(
    <UIRouter plugins={plugins} states={routes} >
        <Provider store={Store}>
            <Header />
            <UIView />
        </Provider>
    </UIRouter>,
    document.getElementById('ui-view')
);