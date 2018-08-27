import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Alert />
 * @param {Object} props 
 */
function Alert(props) {
    const classNames = ['alegrify-alert'];

    classNames.push(props.className);

    return (
        <dialog
            className={classNames.join(' ')}
        >
            {props.chilren}
        </dialog>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

export default Alert;