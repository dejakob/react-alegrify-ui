import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, variantsToPropTypes } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

const CSS_CLASSNAME = 'alegrify-notification';
const VARIANTS = [
    'success',
    'info',
    'warning',
    'error'
];

/**
 * <Notification />
 */
function Notification(props) {
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
        <dialog
            {...applyAdditionalProps(props)}
            open
            role="alert"
            className={classNames.join(' ')}
        >
            <h2
              className="alegrify-notification__title"
            >
                {props.title}
            </h2>
            <p
                className="alegrify-notification__description"
            >
                {props.children}
            </p>
        </dialog>
    );
}
Notification.propTypes = {

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
    ...variantsToPropTypes(VARIANTS)
};

export default attachUniversalProps(Notification);
