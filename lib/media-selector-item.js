import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers';
import { applyAdditionalProps } from './helpers/universal-props';

let noonce = 0;

/**
 * <MediaSelectorItem />
 */
function MediaSelectorItem(props) {
    const [ id ] = useState(
        typeof props.id === 'string' && props.id.trim() !== '' ?
        props.id :
        `alegrify-selector-item--${++noonce}`
    );

    const classNames = ['alegrify-media-selector__list-item'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <li
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            <input
                type="radio"
                name={props.name}
                id={id}
                className="alegrify-media-selector__input"
                checked={props.checked}
                value={props.value}
            />
            <figure
                className="alegrify-media-selector__figure"
            >
                <img
                    className="alegrify-media-selector__image"
                    src={props.image}
                    alt={props.alt}
                    width={props.width || 300}
                    height={props.height || 300}
                />
            </figure>
            <label
                className="alegrify-media-selector__label"
                htmlFor={id}
            >
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </label>
        </li>
    );
}
MediaSelectorItem.propTypes = {
    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * form name
     */
    name: PropTypes.string,

    /**
     * id attribute
     */
    id: PropTypes.string,

    /**
     * Is this item selected?
     */
    checked: PropTypes.bool,

    /**
     * form value
     */
    value: PropTypes.string,

    /**
     * Image source
     */
    image: PropTypes.string,

    /**
     * Alt for image
     */
    alt: PropTypes.string,

    /**
     * Image width
     */
    width: PropTypes.number,

    /**
     * Image height
     */
    height: PropTypes.height,

    /**
     * Title of item
     */
    title: PropTypes.string,

    /**
     * Description of item
     */
    description: PropTypes.description
};

export default attachUniversalProps(MediaSelectorItem);
