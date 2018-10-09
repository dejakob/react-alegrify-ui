import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';

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
                onInput={onInput}
                onKeyUp={props.onKeyUp}
                onKeyDown={props.onKeyDown}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
            >
                {props.value}
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
            value={props.value}
            onInput={onInput}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    );

    function onInput(eventData) {
        const { value } = eventData.target;

        props.changeValue(value);
    }
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    full: PropTypes.bool,
    multiline: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,

    onValueChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};
Input.propExamples = {
    value: 'default value',
    className: '',
    type: 'text',
    placeholder: 'Placeholder text',
    full: false,
    multiline: false,
    id: 'input',
    name: 'input'
};

export default wrapWithInputState(Input);
