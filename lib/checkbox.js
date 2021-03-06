import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

let noonce = 0;

/**
 * <Checkbox />
 * 
 * ```jsx
 * <Checkbox
 *  id="my_checkbox"
 *  name="my_checkbox"
 *  checked={false}
 * >
 *   I agree to GDPR, cookie banners, my local law and the fact that bears have feelings
 * </Checkbox>
 * ```
 */
function Checkbox(props) {
    const [ id ] = useState(
        typeof props.id === 'string' && props.id.trim() !== '' ?
        props.id :
        `alegrify-checkbox--${++noonce}`
    );

    return (
        <>
            <input
                {...applyAdditionalProps(props)}
                type="checkbox"
                className={`alegrify-checkbox__trigger${props.loading ? ' alegrify-checkbox__trigger--loading' : ''}`}
                disabled={props.disabled}
                checked={props.checked}
                id={id}
                name={props.name}
                aria-labelledby={`${id}__label`}
            />
            <label
                className="alegrify-checkbox__view"
                id={`${id}__label`}
                htmlFor={id}
            >
                <span
                    className="alegrify-checkbox__check"
                    aria-hidden="true"
                    role="presentation"
                />
                <span
                    className="alegrify-checkbox__label"
                >
                    {props.children}
                </span>
            </label>
        </>
    );
}

Checkbox.propTypes = {

    /**
     * Label content checkbox
     */
    children: PropTypes.node,

    /**
     * input id
     */
    id: PropTypes.string,

    /**
     * input name
     */
    name: PropTypes.string,

    /**
     * Is checkbox disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Is checkbox checked?
     */
    checked: PropTypes.bool,

    /**
     * Is checkbox doing something?
     */
    loading: PropTypes.bool
};
Checkbox.defaultProps = {};

export default attachUniversalProps(Checkbox);
