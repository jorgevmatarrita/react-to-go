import React from 'react';

import { Button } from 'app/components/shared';

module.exports = ({ add, substract, counter }) => 
    <div>
        <h1>Counting {counter}</h1>
        <Button text="+" handleClick={add} />
        <Button text="-"handleClick={substract} />
    </div>
;