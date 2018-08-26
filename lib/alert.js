import React from 'react';

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

export default Alert;