import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import { combinedReducers } from 'app/store';

module.exports = function configureStore (initialState = {}) {
    return createStore(
            combinedReducers,
            initialState,
            applyMiddleware(
                reduxInmutableStateInvariant()
            )
        );
};