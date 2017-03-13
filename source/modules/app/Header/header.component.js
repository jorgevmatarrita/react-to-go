import React from 'react';
import { UISref } from 'ui-router-react';

module.exports = () => 
    <header>
        <nav>
            <ul>
                <li>
                    <UISref to="home" >
                        <a>Home</a>
                    </UISref>
                </li>
                <li>
                    <UISref to="about" >
                        <a>About</a>
                    </UISref>
                </li>
                <li>
                    <UISref to="contact" >
                        <a>Contact</a>
                    </UISref>
                </li>
            </ul>
        </nav>
    </header>
;