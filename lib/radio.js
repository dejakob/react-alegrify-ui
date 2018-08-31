import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Radio />
 * @param {Object} props
 */
function Radio(props) {
    const classNames = ['alegrify-radio'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.disabled) {
        classNames.push('alegrify-radio--disabled');
    }

    return (
        <div
            className={classNames.join(' ')}
        >
            <input
                type="radio"
                id={props.id}
                name={props.name}
                className="alegrify-radio__trigger"
                disabled={props.disabled}
                checked={props.checked}
            />
            <label
                htmlFor={props.id}
                className="alegrify-radio__check"
            >
                <span
                    className="alegrify-radio__label"
                >
                    {props.children}
                </span>
            </label>
        </div>
    );
}

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string
}

export default Radio;
