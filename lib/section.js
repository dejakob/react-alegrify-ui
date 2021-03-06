import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, variantsToPropTypes } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

const CSS_CLASSNAME = 'alegrify-section';
const VARIANTS = [
    'large',
    'plain'
];

/**
 * <Section />
 */
function Section(props) {
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
        <section
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
            id={props.id}
        >
            {props.children}
        </section>
    );
}
Section.propTypes = {

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

export default attachUniversalProps(Section);