import React from 'react';
import { connect } from 'react-redux';

import HomeComponent from './home.component';

class Home extends React.Component {

    constructor () {
        super();
        this.state = {

        };
    }

    render () {
        return <HomeComponent/>
    }

}

export default connect()(Home);