import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Card />
 * @param {Object} props 
 */
function Card(props) {
    const classNames = ['alegrify-card'];

    classNames.push(props.className);

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
    ]).isRequired
};

export default Card;
