import React from 'react';
import PropTypes from 'prop-types';

/**
 * <ErrorLabel />
 * @param {Object} props 
 */
function ErrorLabel(props) {
    const classNames = ['alegrify-error'];

    if (props.className) {
        classNames.push(props.className);
    }

    // Todo create P component
    return (
        <p
            className={classNames.join(' ')}
        >
            {props.children}
        </p>
    );
}

ErrorLabel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

export default ErrorLabel;
