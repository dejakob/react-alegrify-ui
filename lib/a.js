import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, variantsToPropTypes } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

const CSS_CLASSNAME = 'alegrify-a';
const VARIANTS = [
    'primary'
];

/**
 * <A />
 */
function A(props) {
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
        <a
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
            id={props.id}
            href={props.href}
            title={props.title}
        >
            {props.children}
        </a>
    );
}
A.propTypes = {

    /**
     * Link text / content
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * href: required
     */
    href: PropTypes.string.isRequired,
    
    /**
     * title: required
     */
    title: PropTypes.string.isRequired,

    /**
     * Variants
     */
    ...variantsToPropTypes(VARIANTS)
};

export default attachUniversalProps(A);