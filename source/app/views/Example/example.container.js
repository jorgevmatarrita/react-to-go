import React from 'react';
import { connect } from 'react-redux';

import ExampleComponent from './example.component';

class Example extends React.Component {

    constructor () {
        super();
        this.state = {

        };
    }

    render () {
        return <ExampleComponent/>
    }

}

export default connect()(Example);