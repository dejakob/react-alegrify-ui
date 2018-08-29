import React from 'react';

/**
 * <Radio />
 * @param {Object} props
 */
function Radio(props) {
    const classNames = ['alegrify-radio'];

    if (props.className) {
        classNames.push(props.className);
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