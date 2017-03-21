import React from 'react';
import { connect } from 'react-redux';

import HeaderComponent from './header.component';

class Header extends React.Component {

    constructor () {
        super();
        this.state = {

        };
    }

    render () {
        return <HeaderComponent />
    }

}

export default connect()(Header);