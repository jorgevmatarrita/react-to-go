import React from 'react';

import { Button } from 'app/components/shared';

const counterButtonCSS = 'counter-btn';

module.exports = ({ increment, decrement, counter }) => 
    <div>
        <h1 className="counter-title" >{counter}</h1>
        <div className="align-center">
            <Button text="+" css={counterButtonCSS} handleClick={increment} />
            <Button text="-" css={counterButtonCSS} handleClick={decrement} />
        </div>
    </div>
;