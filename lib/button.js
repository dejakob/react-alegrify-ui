import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

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

    if (props.destructive) {
        classNames.push('alegrify-button--destructive');
    }

    if (props.full) {
        classNames.push('alegrify-button--full');
    }

    if (props.small) {
        classNames.push('alegrify-button--small');
    }

    if (props.large) {
        classNames.push('alegrify-button--large');
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
     * Is this a destructive button?
     */
    destructive: PropTypes.bool,

    /**
     * Is this a full width button?
     */
    full: PropTypes.bool,

    /**
     * Is this a small variant button?
     */
    small: PropTypes.bool,

    /**
     * Is this a large variant button?
     */
    large: PropTypes.bool,

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
    large: false,
    type: 'submit',
    disabled: false
}

export default attachUniversalProps(Button);
