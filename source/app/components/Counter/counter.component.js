import React from 'react';

import { Button } from 'app/components/shared';

const counterButtonCSS = 'counter-btn';

module.exports = ({ add, substract, counter }) => 
    <div>
        <h1 className="counter-title" >{counter}</h1>
        <div className="align-center">
            <Button text="+" css={counterButtonCSS} handleClick={add} />
            <Button text="-" css={counterButtonCSS} handleClick={substract} />
        </div>
    </div>
;