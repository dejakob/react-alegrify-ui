import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

/**
 * <MediaSelector />
 */
function MediaSelector(props) {
    const classNames = ['alegrify-media-selector'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <fieldset
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            <ul
                className="alegrify-media-selector__list"
            >
                {props.children}
            </ul>
        </fieldset>
    )
}
MediaSelector.propTypes = {
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
};

export default attachUniversalProps(MediaSelector);
