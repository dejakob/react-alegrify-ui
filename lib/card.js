import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers';

const DEFAULT_HEIGHT = 400;
const DEFAULT_WIDTH = '100%';

let noonce = 0;

/**
 * <Card />
 * 
 * Card component
 */
function Card(props) {
    const [ id ] = useState(
        typeof props.id === 'string' && props.id.trim() !== '' ?
        props.id :
        `alegrify-card--${++noonce}`
    );

    const containerClassNames = ['alegrify-card'];
    const height = props.height || DEFAULT_HEIGHT;
    const width = props.width || DEFAULT_WIDTH;

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        containerClassNames.push(props.className);
    }

    return (
        <>
            <input
                type="checkbox"
                className="alegrify-card__trigger"
                id={id}
            />
            <label
                className={containerClassNames.join(' ')}
                htmlFor={id}
                style={{
                    height: `${height}px`,
                    width: typeof width === 'number' ? `${width}px` : '100%'
                }}
            >
                <figure
                    className="alegrify-card__figure"
                    style={{
                        height: `${height}px`,
                        width: typeof width === 'number' ? `${width}px` : '100%'
                    }}
                >
                    <img 
                        className="alegrify-card__image"
                        src={props.image}
                        alt={props.alt}
                        height={height}
                        width={width}
                    />
                </figure>
                <div
                    className="alegrify-card__title-overlay"
                >
                    <h2
                        className="alegrify-card__title"
                    >
                        {props.title}
                    </h2>
                </div>
                <div
                    className="alegrify-card__content"
                    data-title={props.title}
                >
                    {props.children}
                </div>
            </label>
        </>
    )
}

Card.propTypes = {

    /**
     * Card content
     */
    children: PropTypes.node.isRequired,

    /**
     * Footer component
     */
    title: PropTypes.string.isRequired,

    /**
     * Image source for the card image
     */
    image: PropTypes.string.isRequired,

    /**
     * Image alt for the card image
     */
    alt: PropTypes.string.isRequired,

    /**
     * HTML id for the card trigger element
     */
    id: PropTypes.string,

    /**
     * Height of the card
     */
    height: PropTypes.number,

    /**
     * Width of the card
     */
    width: PropTypes.number,

    /**
     * Additional classnames
     */
    className: PropTypes.string
};
Card.defaultProps = {
    height: DEFAULT_HEIGHT,
};

export default attachUniversalProps(Card);
