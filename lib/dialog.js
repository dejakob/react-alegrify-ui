import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Dialog />
 * @param {Object} props 
 */
function Dialog(props) {
    const classNames = ['alegrify-dialog'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <div
            className="alegrify-dialog__wrapper"
            open={props.open}    
        >
            <dialog
                className={classNames.join(' ')}
            >
                <div
                    className="alegrify-dialog__content"
                >
                    {props.children}
                </div>
            </dialog>
        </div>
    );
}

Dialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    open: PropTypes.bool
};

export default Dialog;
