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
        this.props.add();
    }

    substract () {
        this.props.substract();
    }

    render () {
        return <CounterComponent add={this.add.bind(this)} substract={this.substract.bind(this)} counter={this.props.count} />
    }

}

function mapStateToProps(state, ownProps) {
    return {
        count : state.counter
    }
};

function mapDispatchToProps(dispatch) {
    console.log(COUNTER_ACTIONS);
    return {
        add: () =>{ dispatch(COUNTER_ACTIONS.INCREMENT()) },
        substract: () =>{ dispatch(COUNTER_ACTIONS.DECREMENT()) },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);