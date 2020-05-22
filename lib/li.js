import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, variantsToPropTypes } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

const CSS_CLASSNAME = 'alegrify-ul__li';
const VARIANTS = [];

/**
 * <Li />
 */
function Li(props) {
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
        <li
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            {props.children}
        </li>
    );
}
Li.propTypes = {
    children: PropTypes.node.isRequired,
    ...variantsToPropTypes(VARIANTS)
};

export default attachUniversalProps(Li);