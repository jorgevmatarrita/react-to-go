// Application styles.
require('./assets/styles/app.scss');

// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';
// Route Components.
import { Home, About } from 'modules/routes';
// App Components.
import { Header } from 'modules/app';

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
        <section>
            <Header />
            <UIView />
        </section>
    </UIRouter>,
    document.getElementById('ui-view')
);