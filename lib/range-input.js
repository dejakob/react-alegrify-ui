import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';

/**
 * <RangeInput />
 * @param {Object} props 
 */
function RangeInput(props) {
    const classNames = ['alegrify-range-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <input
            type="range"
            id={props.id}
            name={props.name}
            className={classNames.join(' ')}
            disabled={props.disabled}
            onChange={e => props.changeValue(e.target.value)}
            value={props.value}
        />
    );
}

RangeInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    disabled: PropTypes.bool,

    onValueChange: PropTypes.func
}

export default wrapWithInputState(RangeInput);