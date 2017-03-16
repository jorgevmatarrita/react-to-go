import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import { mainReducer } from './reducer';
import { CounterReducer } from '../components/Counter/counter.reducer';

module.exports = (initialState = {}) =>
    createStore(
        mainReducer,
        initialState,
        applyMiddleware(
            reduxInmutableStateInvariant()
        )
    );