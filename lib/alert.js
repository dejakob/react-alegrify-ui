import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Alert />
 * 
 * Show a short and temporary message
 * 
 * ```jsx
 * <Alert
 *   open={true}
 * >
 *   Message sent
 * </Alert>
 * ```
 */
function Alert(props) {
    const classNames = ['alegrify-alert'];

    classNames.push(props.className);

    return (
        <dialog
            className={classNames.join(' ')}
            open={props.open}
        >
            {props.children}
        </dialog>
    )
}

Alert.propTypes = {

    /**
     * Content of the alert
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
     * Show the alert?
     */
    open: PropTypes.bool
};
Alert.propExamples = {
    children: 'Alert content',
    className: '',
    open: true
};

export default Alert;