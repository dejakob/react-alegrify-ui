import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Card />
 * @param {Object} props 
 */
function Card(props) {
    const classNames = ['alegrify-card'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }
    
    if (props.small) {
        classNames.push('alegrify-card--small');
    }

    return (
        <section
            className={classNames.join(' ')}
        >
            <div
                className="alegrify-card__header"    
            >
                <h2
                    className="alegrify-card__title"
                >
                    {props.title}
                </h2>
            </div>
            <div
                className="alegrify-card__content"
            >
                {props.children}
            </div>
            <div
                className="alegrify-card__footer"
            >
                {props.footer}
            </div>
        </section>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    footer: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    small: PropTypes.bool,
    title: PropTypes.string.isRequired
};

export default Card;
