import React from 'react';
import { connect } from 'react-redux';

import CounterComponent from './counter.component';
import { COUNTER_ACTIONS } from './counter.reducer';

class Counter extends React.Component {

    constructor () {
        super();
        this.state = {
            count : 0
        };
    }

    add () {
        alert('I am adding!');
    }

    substract () {
        alert('I am substracting');
    }

    render () {
        return <CounterComponent add={this.add} substract={this.substract} counter={this.state.count} />
    }

}

function mapStateToProps(state, ownProps) {
    return {
        count : state.count
    }
};

function mapDispatchToProps(dispatch) {
    return {
        add: () =>{ dispatch(COUNTER_ACTIONS.INCREMENT) },
        substract: () =>{ dispatch(COUNTER_ACTIONS.DECREMENT) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);