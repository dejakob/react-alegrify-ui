import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Button />
 * 
 * Regular HTML button
 * 
 * ```jsx
 * <Button
 *   primary
 * >
 *  Hi, I'm a primary button! 🎉
 * </Button>
 * ```
 */
function Button(props) {
    const classNames = ['alegrify-button'];

    classNames.push(props.className);

    if (props.primary) {
        classNames.push('alegrify-button--primary');
    }

    if (props.full) {
        classNames.push('alegrify-button--full');
    }

    if (props.small) {
        classNames.push('alegrify-button--small');
    }

    return (
        <button
            className={classNames.join(' ')}
            type={props.type || 'submit'}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {

    /**
     * Button text / button content
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
     * Is this a primary button?
     */
    primary: PropTypes.bool,

    /**
     * Is this a full width button?
     */
    full: PropTypes.bool,

    /**
     * Is this a small variant button?
     */
    small: PropTypes.bool,

    /**
     * button|submit
     */
    type: PropTypes.string,

    /**
     * Disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Click action
     */
    onClick: PropTypes.func,
};
Button.defaultProps = {
    primary: false,
    full: false,
    small: false,
    type: 'submit',
    disabled: false
}
Button.propExamples = {
    children: 'Yaay, I\'m a button 👋',
    primary: false,
    full: false,
    small: false,
    type: 'submit',
    disabled: false
};

export default Button;
