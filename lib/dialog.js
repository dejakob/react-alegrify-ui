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

    /**
     * Content
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Should the dialog be shown?
     */
    open: PropTypes.bool
};
Dialog.defaultProps = {
    open: false
};
Dialog.propExamples = {
    children: 'Add some content here',
    className: '',
    open: true
};

export default attachUniversalProps(Dialog);
