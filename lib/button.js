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

    if (props.small) {
        classNames.push('alegrify-button--small');
    }

    return (
        <button
            className={classNames.join(' ')}
            type={props.type || 'submit'}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
    full: PropTypes.bool,
    small: PropTypes.bool,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};
Button.propExamples = {
    children: 'Yaay, I\'m a button 👋',
    primary: false,
    full: false,
    small: false,
    type: 'submit',
    disabled: false
};

export default Button;
