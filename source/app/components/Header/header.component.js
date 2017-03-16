import React from 'react';
import { UISref, UISrefActive } from 'ui-router-react';

import { Image } from 'app/components/shared';
import { react_icon } from 'assets/icons';

module.exports = () => 
    <header>
        <div className="container" >
            <UISref to="home" >
                <a><Image css="logo" source={react_icon} /></a>
            </UISref>
            <nav>
                <ul>
                    <li>
                        <UISrefActive class="active">
                            <UISref to="home" >
                                <a>Home</a>
                            </UISref>
                        </UISrefActive>
                    </li>
                    <li>
                        <UISrefActive class="active">
                            <UISref to="example" >
                                <a>Example</a>
                            </UISref>
                        </UISrefActive>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
;