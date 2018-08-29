import React from 'react';
import PropTypes from 'prop-types';

/**
 * <NumberInput />
 * @param {Object} props
 */
function NumberInput(props) {
    const classNames = ['alegrify-number-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <label
            htmlFor={props.id}
            className={classNames.join(' ')}
        >
            <button
                className="alegrify-number-input__add"
                tabindex="-1"
            >
                <span>+</span>
            </button>
            <input
                type="text"
                id={props.id}
                name={props.id}
                className="alegrify-number-input__input"
                value={props.value || 0}
            />
            <button
                className="alegrify-number-input__subtract"
                tabindex="-1"
            >
                <span>-</span>
            </button>
        </label>
    );
}

NumberInput.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.number
};

export default NumberInput;
