import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../build/dropdown';
import DropdownItem from '../build/dropdown-item';

const DefaultExample = () => {
    const [ value, setValue ] = useState(null);

    return (
        <>
            <Dropdown
                name="fruit[]"
                placeholder="Select a fruit..."
                value={value}
                onValueChange={setValue}
            >
                <DropdownItem value="apple">Apple</DropdownItem>
                <DropdownItem value="pear">Pear</DropdownItem>
                <DropdownItem value="orange">Orange</DropdownItem>
            </Dropdown>
        </>
    );
};

const dropdownDefault = document.getElementById('dropdown--default');

if (dropdownDefault) {
    ReactDOM.render(<DefaultExample />, dropdownDefault);
}