import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';
import useCloseOnEscape from './hooks/use-close-on-escape';
import useModalFocus from './hooks/use-modal-focus';

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
    const actionsRef = useRef(null);

    useCloseOnEscape(props.onClose);
    useModalFocus(actionsRef.current, props.open);    

    const classNames = ['alegrify-dialog'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <dialog
            {...applyAdditionalProps(props)}
            className="alegrify-dialog"
            onClick={props.onClose}
            open={props.open}
            id={props.id}
        >
            <div
                className="alegrify-dialog__content"
                onClick={clickEvent => clickEvent.stopPropagation()}
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
                        ref={actionsRef}
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
     * Close method
     */
    onClose: PropTypes.func,

    /**
     * Title to show inside the dialog
     */
    title: PropTypes.string,

    /**
     * Actions to show inside the dialog
     */
    actions: PropTypes.node,

    /**
     * Id for dialog
     */
    id: PropTypes.string,
};
Dialog.defaultProps = {};

export default attachUniversalProps(Dialog);
