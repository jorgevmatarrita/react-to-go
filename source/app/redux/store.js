import { createStore, combineReducers } from 'redux';

import counter  from '../components/Counter/counter.reducer';

module.exports = createStore(
    combineReducers({
        counter
    })
);