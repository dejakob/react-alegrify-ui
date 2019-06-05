import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';
import { attachUniversalProps } from './helpers/universal-props';

/**
 * <NumberInput />
 * 
 * ```jsx
 * <NumberInput
 *   id="number_input"
 *   name="number_input"
 *   min={1}
 *   value={6}
 *   max={10}
 * />
 * ```
 */
function NumberInput(props) {
    return wrapWithInputState(NumberInputView)(props);
}

function NumberInputView(props) {
    const classNames = ['alegrify-number-input'];
    const min = props.min || 0;
    const max = props.max || 10;
    const value = Math.max(Math.min(max, props.value), min);

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
                onClick={up}
            >
                <span>+</span>
            </button>
            <input
                type="text"
                id={props.id}
                name={props.name}
                className="alegrify-number-input__input"
                value={value}
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
                onClick={down}
            >
                <span>-</span>
            </button>
        </label>
    );

    function onInput(eventData) {
        const { value } = eventData.target;
        const number = Number(value);

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
                up();
                break;

            case 40:
                eventData.preventDefault();
                down();
                break;
        }

        if (typeof props.onKeyUp === 'function') {
            props.onKeyUp(eventData);
        }
    }

    function up() {
        props.changeValue(Math.min(max, (props.value || 0) + 1));
    }

    function down() {
        props.changeValue(Math.max(min, (props.value || 0) - 1));
    }
}

NumberInput.propTypes = {

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Input id
     */
    id: PropTypes.string.isRequired,

    /**
     * Input name
     */
    name: PropTypes.string.isRequired,

    /**
     * Input value, must be a number
     */
    value: PropTypes.number,

    /**
     * Is input disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Is this a wide variant?
     */
    wide: PropTypes.bool,

    /**
     * 100% width?
     */
    full: PropTypes.bool,

    /**
     * Min value
     */
    min: PropTypes.number,

    /**
     * Max value
     */
    max: PropTypes.number,

    /**
     * On value change, param: number value
     */
    onValueChange: PropTypes.func
};
NumberInput.defaultProps = {
    min: 0,
    max: 10,
    value: 0,
    wide: false,
    full: false,
    disabled: false
};
NumberInput.propExamples = {
    className: '',
    id: 'number_input',
    name: 'number_input',
    value: 6,
    disabled: false,
    wide: false,
    full: false,
    min: 1,
    max: 10
};

export default attachUniversalProps(NumberInput);
