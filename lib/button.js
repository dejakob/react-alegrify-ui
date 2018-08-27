import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Button />
 * @param {Object} props 
 */
function Button(props) {
    const classNames = ['alegrify-button'];

    classNames.push(props.className);

    if (props.primary) {
        classNames.push('alegrify-button--primary');
    }

    if (props.full) {
        classNames.push('alegrify-button--full');
    }

    return (
        <button
            className={classNames.join(' ')}
            type={props.type || 'submit'}
        >
            {props.children}
        </button>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
    full: PropTypes.bool,
    type: PropTypes.string
};

export default Button;
