import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Input />
 * @param {Object} props 
 */
function Input(props) {
    const classNames = ['alegrify-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.full) {
        classNames.push('alegrify-input--full');
    }

    if (props.multiline) {
        return (
            <textarea
                id={props.id}
                name={props.name}
                className={classNames.join(' ')}
            >
                {props.children}
            </textarea>
        );
    }

    return (
        <input
            id={props.id}
            name={props.name}
            type={props.type || 'text'}
            className={classNames.join(' ')}
            placeholder={props.placeholder || ''}
            value={props.children}
        />
    );
}

Input.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    full: PropTypes.bool,
    multiline: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string
};

export default Input;