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
            {props.children}
        </section>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    small: PropTypes.bool
};

export default Card;
