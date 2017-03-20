// Dependencies.
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, HashRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
// Store.
import { configureStore } from 'app/redux';
// Route Components.
import { Home, Example } from 'app/views';
// App Components.
import { Header } from 'app/components';

const 
    store = configureStore(),
    hashRouter = new HashRouter();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashRouter.history} >
            <section>
                <Helmet title="React to go!" />
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/example" component={Example} />
            </section>
        </Router>
    </Provider>,
    document.getElementById('ui-view')
);