// Dependencies.
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';
import Helmet from 'react-helmet';
// Store.
import { Store } from 'app/redux';
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
    <Provider store={Store}>
        <UIRouter plugins={plugins} states={routes} >
            <section>
                <Helmet title="React to go!" />
                <Header />
                <UIView />
            </section>
        </UIRouter>
    </Provider>,
    document.getElementById('ui-view')
);