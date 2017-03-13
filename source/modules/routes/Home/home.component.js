import React from 'react';
import { UISref } from 'ui-router-react';

import { Button, Image } from 'modules/common';
import { home_icon } from 'assets/icons';

module.exports = () => 
    <div>
        <h1>App</h1>
        <Image source={home_icon} />
    </div>
;