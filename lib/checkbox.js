import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Checkbox />
 * @param {Object} props 
 */
function Checkbox(props) {
    const classNames = ['alegrify-checkbox'];

    classNames.push(props.className);

    return (
        <div
            class={classNames.join(' ')}
        >
            <input
                type="checkbox"
                id={props.id}
                name={props.name}
                class="alegrify-checkbox__trigger"
                disabled={props.disabled}
                checked={props.checked}
            />
            <label
                htmlFor={props.id}
                class="alegrify-checkbox__check"
            >
                <span 
                    class="alegrify-checkbox__label"
                >
                    {props.children}
                </span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
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

export default Checkbox;
