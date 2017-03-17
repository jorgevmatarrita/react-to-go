import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'app/components/shared';
import { react_icon } from 'assets/icons';

module.exports = () => 
    <header>
        <div className="container" >
            <Link to="/" ><Image css="logo" source={react_icon} /></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/" active="active" >Home</Link>
                    </li>
                    <li>
                        <Link to="example" active="active" >Example</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
;