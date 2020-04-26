import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

const CSS_CLASSNAME = 'alegrify-avatar';
const VARIANTS = {
    xs: 'extra-small',
    s: 'small',
    l: 'large',
    xl: 'extra-large'
};
const IMAGE_SIZES = {
    default: 64,
    xs: 16,
    s: 16,
    l: 100,
    xl: 200
};

/**
 * <Avatar />
 */
function Avatar(props) {
    const classNames = [
        CSS_CLASSNAME,
        ...Object.keys(VARIANTS)
            .filter(variant => props[variant])
            .map(variant => `${CSS_CLASSNAME}--${VARIANTS[variant]}`)
    ];
    const imageSize = IMAGE_SIZES[
        Object.keys(VARIANTS)
            .find(variant => props[variant]) || 'default'
    ];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <figure
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
            role="presentation"
        >
            <img
                src={props.image}
                className="alegrify-avatar__image"
                alt={props.alt}
                height={imageSize}
                width={imageSize}
            />
        </figure>
    )
}

Avatar.propTypes = {
    /**
     * avatar image
     */
    image: PropTypes.string.isRequired,

    /**
     * Alt for image
     */
    alt: PropTypes.string.isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,
};

export default attachUniversalProps(Avatar);
