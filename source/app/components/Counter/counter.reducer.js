const COUNTER_ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

function CounterReducer (state = 0, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return state + 1
    case COUNTER_ACTIONS.DECREMENT:
      return state - 1
    default:
      return state
  }

}

module.exports = {
  COUNTER_ACTIONS,
  CounterReducer,
};