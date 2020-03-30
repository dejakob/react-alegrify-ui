import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

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
                onChange={onChange}
                onKeyUp={props.onKeyUp}
                onKeyDown={props.onKeyDown}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                rows={amountOfLines}
                value={props.value}
                disabled={props.disabled}
                error={props.error}
            />
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
            disabled={props.disabled}
            onChange={onChange}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            error={props.error}
        />
    );

    function onChange(eventData) {
        const { value } = eventData.target;
        props.onValueChange(value);
    }
}

Input.propTypes = {

    /**
     * Value to show in the input
     */
    value: PropTypes.string.isRequired,

    /**
     * On value change method (passes value)
     */
    onValueChange: PropTypes.func.isRequired,

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
     * Disable input
     */
    disabled: PropTypes.bool,

    /**
     * Input id
     */
    id: PropTypes.string,

    /**
     * Input name
     */
    name: PropTypes.string,

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
    type: 'text',
    placeholder: '',
};

export default attachUniversalProps(Input);
