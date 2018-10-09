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
        <aside
            className={classNames.join(' ')}
        >
            {props.children}
        </aside>
    )
}

Aside.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
Aside.propExamples = {
    children: 'Aside content'
};

export default Aside;
