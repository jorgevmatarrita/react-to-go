import React from 'react';

import { Button, Image } from 'app/components/shared';
import { react_icon } from 'assets/icons';

module.exports = () => 
    <div className="container" id="Home" >
        <div className="align-center">
            <h1 className="page-title" >React to go!</h1>
            <Image css='logo' source={react_icon} />
        </div>
        <h2 className="align-center">
            Simple React-Redux boilerplate for a webapplication.
        </h2>    
    </div>
;