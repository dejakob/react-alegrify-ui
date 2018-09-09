import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Aside />
 * @param {Object} props 
 */
function Aside(props) {
    const classNames = ['alegrify-aside'];

    classNames.push(props.className);

    return (
        <Aside
            className={classNames.join(' ')}
        >
            {props.children}
        </Aside>
    )
}

Aside.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Aside;
