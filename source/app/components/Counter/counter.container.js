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

    increment () {
        this.props.increment();
    }

    decrement () {
        this.props.decrement();
    }

    render () {
        return <CounterComponent increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} counter={this.props.count} />
    }

}

function mapStateToProps(state, ownProps) {
    return {
        count : state.counter
    }
};

function mapDispatchToProps(dispatch) {
    return {
        increment: () =>{ dispatch(COUNTER_ACTIONS.INCREMENT()) },
        decrement: () =>{ dispatch(COUNTER_ACTIONS.DECREMENT()) },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);