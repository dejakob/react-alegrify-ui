import React from 'react';
import PropTypes from 'prop-types';

/**
 * ```jsx
 * <DropdownItem
 *  id="cookies"
 *  name="cookies"
 *  value="cookies"
 * >
 *      cookies
 * </DropdownItem>
 * ```
 */
function DropdownItem(props) {
    return (
        <React.Fragment>
            <input
                className="alegrify-dropdown__option"
                name={props.name}
                type="radio"
                value={props.value}
                id={props.id}
                onChange={props.onSelect}
                checked={props.checked}
            />
            <label
                className="alegrify-dropdown__option-label"
                htmlFor={props.id}
            >
                {props.children}
            </label>
        </React.Fragment>
    )
}

DropdownItem.propTypes = {
    /**
     * Value of the item
     */
    value: PropTypes.string.isRequired,

    /**
     * Id of the item
     */
    id: PropTypes.string.isRequired,

    /**
     * Content for item
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

};

export default DropdownItem;