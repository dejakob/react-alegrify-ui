import React from 'react';
import PropTypes from 'prop-types';

const SimpleUiComponentPropTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

/**
 * Simple component that passes props and attaches the className
 * @param {React.Component} el 
 * @param {String} className 
 * @param {Object} props 
 */
function SimpleUiComponent(el, className, props) {
    const classNames = [ className ];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return React.cloneElement(
        el,
        Object.assign({}, { className: classNames.join(' ') }, props)
    );
}

export default SimpleUiComponent;
export {
    SimpleUiComponentPropTypes
};
