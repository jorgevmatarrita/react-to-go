import { createStore } from 'redux'

const ACTION_TYPES = {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT',
}

function counterReducer(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + 1;
    case ACTION_TYPES.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

module.exports = {
    CounterStore : createStore(counterReducer),
    CounterActionTypes : ACTION_TYPES,
}