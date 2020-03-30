import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, variantsToPropTypes } from './helpers';

const CSS_CLASSNAME = 'alegrify-button';
const VARIANTS = [
    'primary',
    'destructive',
    'full',
    'link',
    'loading'
];

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
    const classNames = [
        CSS_CLASSNAME,
        ...VARIANTS
            .filter(variant => props[variant])
            .map(variant => `${CSS_CLASSNAME}--${variant}`)
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <button
            className={classNames.join(' ')}
            type={props.type || 'submit'}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            <span className={`${CSS_CLASSNAME}__content`}>
                {props.children}
            </span>
        </button>
    )
}

Button.propTypes = {

    /**
     * Button text / button content
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Variants
     */
    ...variantsToPropTypes(VARIANTS),

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
    type: 'submit'
}

export default attachUniversalProps(Button);
