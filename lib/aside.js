import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Aside />
 * 
 * Simple HTML aside
 * 
 * Small viewports: full width,
 * 
 * Large viewports: 1/3 width
 * 
 * ```jsx
 * <Aside>
 *  Some extra information on the side
 * </Aside>
 * ```
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

    /**
     * Content of the aside
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
Aside.propExamples = {
    children: 'Aside content'
};

export default Aside;
