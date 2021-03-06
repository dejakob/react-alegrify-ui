import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

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
            {...applyAdditionalProps(props)}
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
    children: PropTypes.node.isRequired,

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
    className: '',
    error: false
};

export default attachUniversalProps(Label);
