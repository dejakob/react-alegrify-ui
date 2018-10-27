import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';

/**
 * <Input />
 * 
 * ```jsx
 * <Input
 *   id="my_input"
 *   name="my_input"
 *   multiline={true}
 *   value="default value"
 * />
 * ```
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
        const amountOfLines = ((props.value || '').match(/\n/gi) || []).length + 1;

        return (
            <textarea
                id={props.id}
                name={props.name}
                className={classNames.join(' ')}
                placeholder={props.placeholder || ''}
                onInput={onInput}
                onKeyUp={props.onKeyUp}
                onKeyDown={props.onKeyDown}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                rows={amountOfLines}
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

    /**
     * Value to show in the input
     */
    value: PropTypes.string.isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Input type
     */
    type: PropTypes.string,

    /**
     * Input placeholder
     */
    placeholder: PropTypes.string,

    /**
     * 100% width?
     */
    full: PropTypes.bool,

    /**
     * Use textarea instead of input
     */
    multiline: PropTypes.bool,

    /**
     * Input id
     */
    id: PropTypes.string.isRequired,

    /**
     * Input name
     */
    name: PropTypes.string.isRequired,

    /**
     * On value change method (passes value)
     */
    onValueChange: PropTypes.func,

    /**
     * Native onKeyUp event
     */
    onKeyUp: PropTypes.func,

    /**
     * Native onKeyDown event
     */
    onKeyDown: PropTypes.func,

    /**
     * Native onFocus event
     */
    onFocus: PropTypes.func,

    /**
     * Native onBlur event
     */
    onBlur: PropTypes.func
};
Input.defaultProps = {
    type: 'text'
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
