import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';

/**
 * <NumberInput />
 * @param {Object} props
 */
function NumberInput(props) {
    const classNames = ['alegrify-number-input'];
    const min = props.min || 0;
    const max = props.max || 10;

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.wide) {
        classNames.push('alegrify-number-input--wide');
    }

    if (props.full) {
        classNames.push('alegrify-number-input--full');
    }

    return (
        <label
            htmlFor={props.id}
            className={classNames.join(' ')}
        >
            <button
                className="alegrify-number-input__add"
                tabIndex="-1"
                onClick={() => props.changeValue((props.value || 0) + 1)}
            >
                <span>+</span>
            </button>
            <input
                type="text"
                id={props.id}
                name={props.name}
                className="alegrify-number-input__input"
                value={Number(props.value || 0)}
                disabled={props.disabled}
                onInput={onInput}
                onKeyUp={onKeyUp}
                onKeyDown={props.onKeyDown}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                autoComplete="off"
            />
            <button
                className="alegrify-number-input__subtract"
                tabIndex="-1"
                onClick={() => props.changeValue((props.value || 0) - 1)}
            >
                <span>-</span>
            </button>
        </label>
    );

    function onInput(eventData) {
        const { value } = eventData.target;
        const number = Number(value);

        console.log('on input', number, min, max);

        if (isNaN(number)) {
            props.changeValue(0);
        }
        else if (number < min) {
            props.changeValue(min);
        }
        else if (number > max) {
            props.changeValue(max);
        }
        else {
            props.changeValue(number);
        }
    }

    function onKeyUp(eventData) {
        switch (eventData.keyCode) {
            case 38:
                eventData.preventDefault();
                props.changeValue(Math.min(max, (props.value || 0) + 1));
                break;

            case 40:
                eventData.preventDefault();
                props.changeValue(Math.max(min, (props.value || 0) - 1));
                break;
        }

        if (typeof props.onKeyUp === 'function') {
            props.onKeyUp(eventData);
        }
    }
}

NumberInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    wide: PropTypes.bool,
    full: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,

    onValueChange: PropTypes.func
};

export default wrapWithInputState(NumberInput);
