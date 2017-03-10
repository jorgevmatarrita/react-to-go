import React from 'react';
import foxImage from '../assets/images/fox.jpg';
import { CounterStore, CounterActionTypes } from '../reducers/counter';

const {
    Button,
    Image
} = CommonComponents;

const doSomething = () => {
    CounterStore.dispatch({
        type: CounterActionTypes.INCREMENT
    });
};

module.exports = () => 
    <div>
        <h1>{CounterStore.getState()}</h1>
        <Button handleClick={doSomething} />
        <Image source={foxImage} />
    </div>
;