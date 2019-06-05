import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

/**
 * <Label />
 * 
 * ```jsx
 * <Label
 *   htmlFor="input_id"
 *   error
 * >
 *   Something went wrong
 * </Label>
 * ```
 */
function Label(props) {
    const classNames = ['alegrify-label'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.error) {
        classNames.push('alegrify-label--error');
    }

    return (
        <label
            htmlFor={props.htmlFor}
            className={classNames.join(' ')}
        >
            {props.children}
        </label>
    )
}

Label.propTypes = {

    /**
     * Label content
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * for attribute referring to a form element
     */
    htmlFor: PropTypes.string,

    /**
     * Is this an error label?
     */
    error: PropTypes.bool
};
Label.defaultProps = {
    error: false
};
Label.propExamples = {
    children: 'Label content',
    className: '',
    htmlFor: 'input_id',
    error: false
}

export default attachUniversalProps(Label);
