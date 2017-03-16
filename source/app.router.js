// Dependencies.
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';
import Helmet from 'react-helmet';
// Store.
import { ConfigureStore } from 'app/redux';
// Route Components.
import { Home, Example } from 'app/views';
// App Components.
import { Header } from 'app/components';

const plugins = [
    pushStateLocationPlugin,
];

const views = [
     {
        name: 'home',
        url: '/',
        component: Home,
    },
    {
        name: 'example',
        url: '#/example',
        component: Example,
    }
];

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <UIRouter plugins={plugins} states={views} >
            <section>
                <Helmet title="React to go!" />
                <Header />
                <UIView />
            </section>
        </UIRouter>
    </Provider>,
    document.getElementById('ui-view')
);