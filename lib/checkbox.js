import React from 'react';
import PropTypes from 'prop-types';

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
    const classNames = ['alegrify-checkbox'];

    classNames.push(props.className);

    if (props.disabled) {
        classNames.push('alegrify-checkbox--disabled');
    }

    return (
        <div
            className={classNames.join(' ')}
        >
            <input
                type="checkbox"
                id={props.id}
                name={props.name}
                className="alegrify-checkbox__trigger"
                disabled={props.disabled}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label
                htmlFor={props.id}
                className="alegrify-checkbox__check"
            >
                <span 
                    className="alegrify-checkbox__label"
                >
                    {props.children}
                </span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {

    /**
     * input id
     */
    id: PropTypes.string.isRequired,

    /**
     * input name
     */
    name: PropTypes.string.isRequired,

    /**
     * Label content checkbox
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Is checkbox disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Is checkbox checked?
     */
    checked: PropTypes.bool,

    /**
     * Additional classnames
     */
    className: PropTypes.string
};
Checkbox.propExamples = {
    id: 'checkbox',
    name: 'checkbox',
    children: 'Look at this checkbox',
    disabled: false,
    checked: false,
    className: ''
};

export default Checkbox;
