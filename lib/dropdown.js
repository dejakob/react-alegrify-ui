import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';
import useKeyDown from './hooks/use-keydown';
import useCloseOnEscape from './hooks/use-close-on-escape';

const KEY_CODES = {
    UP: 38,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    ESCAPE: 27,
    TAB: 9
};

let noonce = 0;

/**
 * 
 * Dropdown
 * ```jsx
 * <Dropdown>
 *      <DropdownItem
 *          value="cookies"
 *      >
 *          Cookies
 *      </DropdownItem>
 *      <DropdownItem
 *          value="apples"
 *      >
 *          Apples
 *      </DropdownItem>
 * </Dropdown>
 * ```
 * 
 * @TODO: search/filter or filter by key press
 * 
 */
function Dropdown(props) {
    const [ active, setActive ] = useState(findIndexOfSelectedOption());
    const [ open, setOpen ] = useState(false);
    const [ id ] = useState(
        typeof props.id === 'string' && props.id.trim() !== '' ?
        props.id :
        `alegrify-dropdown--${++noonce}`
    );
    const stateScope = useRef({ active, open });

    const [ 
        onUpArrow, onDownArrow, onEnter, onTab, onSpace
    ] = useKeyDown(
        KEY_CODES.UP, KEY_CODES.DOWN, KEY_CODES.ENTER, KEY_CODES.TAB, KEY_CODES.SPACE
    );
    useCloseOnEscape(() => setOpen(false));

    useEffect(() => {
        onUpArrow(handleUpArrow);
        onDownArrow(handleDownArrow);
        onEnter(handleEnter);
        onSpace(handleEnter);
        onTab(handleTab);

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    useEffect(() => {
        setActive(findIndexOfSelectedOption());
    }, [props.value]);

    useEffect(() => {
        stateScope.current.active = active;
    }, [active]);

    useEffect(() => {
        stateScope.current.open = open;

        if (!open) {
            stateScope.current.active = findIndexOfSelectedOption();
        }
    }, [open]);

    const classNames = ['alegrify-dropdown'];
    const { value } = props;

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    return (
        <div
            className={classNames.join(' ')}
        >
            <input
                className="alegrify-dropdown__trigger"
                type="checkbox"
                id={id}
                onChange={() => setOpen(!open)}
                checked={open}
                disabled={props.disabled}
                aria-hidden="true"
            />
            <label
                id={`${id}__label`}
                className="alegrify-dropdown__label"
                htmlFor={id}
                aria-role="button"
                aria-haspopup="listbox"
            >
                {value ? value : props.placeholder}
            </label>
            <ul
                className="alegrify-dropdown__list"
                data-menu-for={id}
                aria-role="listbox"
                aria-labelledby={`${id}__label`}
            >
                {renderChildren()}
            </ul>
        </div>
    );

    /**
     * When pressing up, set active to item above
     * @param {KeyboardEvent} keydownEvent 
     */
    function handleUpArrow(keydownEvent) {
        const { active, open } = stateScope.current;

        if (open) {
            keydownEvent.preventDefault();
            setActive(Math.max(0, active - 1));
        }
    }

    /**
     * When pressing down, set active to item below
     * @param {KeyboardEvent} keydownEvent 
     */
    function handleDownArrow(keydownEvent) {
        const { active, open } = stateScope.current;

        if (open) {
            keydownEvent.preventDefault();
            setActive(Math.min(getAmountOfChildren() - 1, active + 1));
        }
    }

    /**
     * When pressing enter, select active option
     * @param {KeyboardEvent} keydownEvent 
     */
    function handleEnter(keydownEvent) {
        const { active, open } = stateScope.current;

        if (open) {
            keydownEvent.preventDefault();
            handleSelectOption(active);
        }
    }

    /**
     * When pressing tab, go close the dropdown
     *  focus state will be on other element
     */
    function handleTab() {
        const { open } = stateScope.current;

        if (open) {
            setOpen(false);
        }
    }

    /**
     * When clicking body (aka clicking outside the dropdown),
     *  close the menu
     */
    function handleBodyClick(clickEvent) {
        const { target } = clickEvent;
        const { open } = stateScope.current;

        if (open) {
            let node = target;

            while (node !== document.body) {
                if (
                    node.hasAttribute('data-menu-for') &&
                    node.getAttribute('data-menu-for') === `${id}`
                ) {
                    return;
                }

                node = node.parentNode;
            }

            setOpen(false);
        }
    }

    function findIndexOfSelectedOption() {
        const arrayOfChildren = Array.isArray(props.children) ?
            props.children :
            React.Children.toArray(props.children);

        return arrayOfChildren.findIndex(child => child.props.value === props.value);
    }

    /**
     * @returns {Number}
     */
    function getAmountOfChildren() {
        return Array.isArray(props.children) ?
            props.children.length :
            React.Children.count(props.children);
    }

    /**
     * Fire change event with selected value
     *  and close the menu
     * @param {Number} index 
     */
    function handleSelectOption(index) {
        const arrayOfChildren = Array.isArray(props.children) ?
            props.children :
            React.Children.toArray(props.children);

        setOpen(false);
        setActive(index);

        if (arrayOfChildren[index]) {
            const selectedValue = arrayOfChildren[index].props.value;
            props.onValueChange(selectedValue);
        }
    }

    /**
     * Render dropdown items
     * (Can either be an array of children or React.children)
     */
    function renderChildren() {
        // Render all items server side for SEO
        if (typeof window !== 'undefined' && !open) {
            return null;
        }

        if (typeof props.children.map === 'function') {
            return props.children.map(renderChild);
        }
        else {
            return React.Children.map(props.children, renderChild);
        }
    }

    /**
     * Render single child
     * @param {Node} child 
     * @param {String} index 
     */
    function renderChild(child, index = 0) {
        return React.cloneElement(child, {
            onSelect: () => handleSelectOption(index),
            onHover: () => setActive(index),
            checked: active === index,
            name: props.name,
            key: index
        });
    }
}

Dropdown.propTypes = {

    /**
     * Id of the dropdown
     */
    id: PropTypes.string,

    /**
     * Name of the dropdown
     */
    name: PropTypes.string,

    /**
     * Items for the dropdown
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
     * Selected value of the dropdown
     */
    value: PropTypes.string,

    /**
     * Placeholder message for dropdown label
     */
    placeholder: PropTypes.string,

    /**
     * Should the dropdown be disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Gets triggered when value changes
     * Passes value string as argument
     */
    onValueChange: PropTypes.func.isRequired
};
Dropdown.defaultProps = {
    value: null,
    placeholder: 'Please select...',
};

export default attachUniversalProps(Dropdown);
