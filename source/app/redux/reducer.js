import { combineReducers } from 'redux';
import { CounterReducer } from '../components/Counter/counter.reducer';

const mainReducer = combineReducers({
    counter: CounterReducer
});

export { mainReducer };