import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

let noonce = 0;

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
    const [ id ] = useState(
        typeof props.id === 'string' && props.id.trim() !== '' ?
        props.id :
        `alegrify-dropdown-item--${++noonce}`
    );

    return (
        <li
            className="alegrify-dropdown__list-item"
            onMouseOver={props.onHover}
            onClick={props.onSelect}
            aria-role="menuitemradio"
        >
            <input
                type="radio"
                className="alegrify-dropdown__list-item-trigger"
                name={props.name}
                value={props.value}
                id={id}
                checked={props.checked}
                onChange={() => {}}
                aria-hidden="true"
            />
            <label
                htmlFor={id}
                aria-role="none"
                className="alegrify-dropdown__list-item-label"
            >
                {props.children}
            </label>
        </li>
    );
}

DropdownItem.propTypes = {
    /**
     * Value of the item
     */
    value: PropTypes.string.isRequired,


    /**
     * Id of the item
     */
    id: PropTypes.string,

    /**
     * Content for item
     */
    children: PropTypes.node.isRequired

};

export default attachUniversalProps(DropdownItem);
