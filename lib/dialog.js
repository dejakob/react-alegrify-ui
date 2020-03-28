import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

/**
 * <Dialog />
 * 
 * ```jsx
 * <Dialog
 *   open={true}
 * >
 *   Some dialog content
 * </Dialog>
 * ```
 */
function Dialog(props) {
    const classNames = ['alegrify-dialog'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <dialog
            className="alegrify-dialog"
            open={props.open}
        >
            <div
                className="alegrify-dialog__content"
            >
                {props.title ? (
                    <h2
                        className="alegrify-dialog__title"
                    >
                        {props.title}
                    </h2>
                ) : null}

                {props.children}

                {props.actions ? (
                    <div
                        className="alegrify-dialog__actions"
                    >
                        {props.actions}
                    </div>
                ) : null}
            </div>
        </dialog>
    );
}

Dialog.propTypes = {

    /**
     * Content
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Should the dialog be shown?
     */
    open: PropTypes.bool,

    /**
     * Title to show inside the dialog
     */
    title: PropTypes.string,

    /**
     * Actions to show inside the dialog
     */
    actions: PropTypes.node
};
Dialog.defaultProps = {};

export default attachUniversalProps(Dialog);
