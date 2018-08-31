import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Label />
 * @param {Object} props
 */
function Label(props) {
    const classNames = ['alegrify-label'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <label
            htmlFor={props.id}
            className={classNames.join(' ')}
        >
            {props.children}
        </label>
    )
}

Label.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    error: PropTypes.bool
};

export default Label;
