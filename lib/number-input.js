import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';

/**
 * <NumberInput />
 * @param {Object} props
 */
function NumberInput(props) {
    const classNames = ['alegrify-number-input'];

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

        if (isNaN(Number(value))) {
            props.changeValue(0);
        }
        else {
            props.changeValue(Number(value));
        }
    }

    function onKeyUp(eventData) {
        switch (eventData.keyCode) {
            case 38:
                eventData.preventDefault();
                props.changeValue((props.value || 0) + 1);
                break;

            case 40:
                eventData.preventDefault();
                props.changeValue((props.value || 0) - 1);
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

    onValueChange: PropTypes.func
};

export default wrapWithInputState(NumberInput);
