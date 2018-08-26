import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Alert />
 * @param {Object} props 
 */
function Alert(props) {
    return (
        <dialog
            className="alegrify-alert"
        >
            {props.chilren}
        </dialog>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Alert;