import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, variantsToPropTypes } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

const CSS_CLASSNAME = 'alegrify-ul';
const VARIANTS = [];

/**
 * <Ul />
 */
function Ul(props) {
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
        <ul
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            {props.children}
        </ul>
    );
}
Ul.propTypes = {
    children: PropTypes.node.isRequired,
    ...variantsToPropTypes(VARIANTS)
};

export default attachUniversalProps(Ul);