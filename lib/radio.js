import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

/**
 * <Radio />
 * 
 * ```jsx
 * <Radio
 *   name="my_radio"
 *   id="my_radio"
 *   checked={true}
 * >
 *   Option value
 * </Radio>
 * ```
 */
function Radio(props) {
    const classNames = ['alegrify-radio'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.disabled) {
        classNames.push('alegrify-radio--disabled');
    }

    return (
        <div
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            <input
                type="radio"
                id={props.id}
                name={props.name}
                className="alegrify-radio__trigger"
                disabled={props.disabled}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label
                htmlFor={props.id}
                id={`${props.id}__label`}
                className="alegrify-radio__view"
            >
                <span
                    className="alegrify-radio__check"
                    role="presentation"
                    aria-hidden="true"
                ></span>
                <span
                    className="alegrify-radio__label"
                >
                    {props.children}
                </span>
            </label>
        </div>
    );
}

Radio.propTypes = {

    /**
     * Input id
     */
    id: PropTypes.string.isRequired,

    /**
     * Input value
     */
    name: PropTypes.string.isRequired,

    /**
     * Radio label content
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Is radio disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Is radio checked?
     */
    checked: PropTypes.bool,

    /**
     * Additional classnames
     */
    className: PropTypes.string
};
Radio.defaultProps = {
    disabled: false,
    checked: false,
    className: ''
};

export default attachUniversalProps(Radio);
