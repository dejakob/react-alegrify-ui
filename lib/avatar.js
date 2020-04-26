import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

/**
 * <Avatar />
 */
function Avatar(props) {
    const classNames = ['alegrify-avatar'];

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
