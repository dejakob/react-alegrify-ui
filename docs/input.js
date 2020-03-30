import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Input from '../build/input';

const InputDefaultExample = () => {
    const [ value, setValue ] = useState('');

    return (
        <Input
            placeholder="Your name..."
            value={value}
            onValueChange={setValue}
        />
    );
};

const inputDefault = document.getElementById('input--default');

if (inputDefault) {
    ReactDOM.render(<InputDefaultExample />, inputDefault);
}