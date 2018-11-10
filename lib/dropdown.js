import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const KEY_CODES = {
    UP: 38,
    DOWN: 40,
    ENTER: 13,
    ESCAPE: 27,
    TAB: 9
};

/**
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
 */
class Dropdown extends Component {
    constructor() {
        super();

        this.changeSelectedIndex = this.changeSelectedIndex.bind(this);
        this.handleBodyClick = this.handleBodyClick.bind(this);

        this.actions = {
            handleSelectOption: this.handleSelectOption.bind(this),
            handleOpenDropdown: this.handleOpenDropdown.bind(this),
            handleKeyDown: this.handleKeyDown.bind(this)
        };
    }

    componentWillMount() {
        const childrenAsArray = typeof this.props.children.map === 'function' ?
            this.props.children :
            React.Children.toArray(this.props.children);

        const value = childrenAsArray.find(child => 
            this.props.value === child.props.value
        );

        this.setState({
            value: value || null,
            open: false
        });

        if (typeof window !== 'undefined') {
            document.body.addEventListener('click', this.handleBodyClick);
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            document.body.removeEventListener('click', this.handleBodyClick);
        }
    }

    componentWillReceiveProps(newProps) {
        if (
            newProps.value !== this.state.value &&
            newProps.value !== this.props.value
        ) {
            const childrenAsArray = typeof newProps.children.map === 'function' ?
                newProps.children :
                React.Children.toArray(newProps.children);

            const value = childrenAsArray.find(child => 
                newProps.value === child.props.value
            );

            this.setState({
                value: value || null
            });
        }
    }

    componentWillUpdate(newProps, newState) {
        if (
            (newState.value && newState.value.props.value) !== (this.state.value && this.state.value.props.value)
        ) {
            if (typeof this.props.onValueChange === 'function' && newState.value) {
                this.props.onValueChange(newState.value.props.value);
            }
        }
    }

    handleSelectOption(index) {
        const childrenAsArray = typeof this.props.children.map === 'function' ?
            this.props.children :
            React.Children.toArray(this.props.children);

        this.setState({
            value: childrenAsArray[index],
            open: false
        });
    }

    handleKeyDown(eventData) {
        const { keyCode } = eventData;

        switch (keyCode) {
            case KEY_CODES.UP:
                eventData.preventDefault();
                this.changeSelectedIndex(-1);
            break;

            case KEY_CODES.DOWN:
                eventData.preventDefault();
                this.changeSelectedIndex(1);
            break;

            case KEY_CODES.ENTER:
                eventData.preventDefault();
                this.setState({ open: !this.state.open });
            break;

            case KEY_CODES.ESCAPE:
                eventData.preventDefault();
                this.setState({ open: false });
            break;

            default:
                const query = String.fromCharCode(eventData.which || eventData.charCode);
                const childrenAsArray = typeof this.props.children.map === 'function' ?
                    this.props.children :
                    React.Children.toArray(this.props.children);
                const index = Math.max(childrenAsArray.findIndex(child =>
                    child.props.value.toLowerCase().indexOf(query.toLowerCase()) > -1
                ), 0);

                this.setState({
                    value: childrenAsArray[index]
                });
        }
    }

    handleOpenDropdown(eventData) {
        this.setState({ open: eventData.target.checked });
    }

    changeSelectedIndex(increment) {
        const childrenAsArray = typeof this.props.children.map === 'function' ?
            this.props.children :
            React.Children.toArray(this.props.children);
        const currentIndex = Math.max(childrenAsArray.findIndex(child =>
            this.state.value && this.state.value.props.value === child.props.value
        ), 0);
        const newIndex = (currentIndex + childrenAsArray.length + increment) % childrenAsArray.length;

        this.setState({
            value: childrenAsArray[newIndex]
        });
    }

    handleBodyClick(eventData) {
        const { target } = eventData;
        let node = target;

        while (node !== document.body && node !== ReactDom.findDOMNode(this)) {
            node = node.parentNode;
        }

        if (node === document.body) {
            this.setState({ open: false });
        }
    }

    render() {
        return DropdownView(
            Object.assign(
                {},
                this.props,
                this.state,
                this.actions
            )
        );
    }
}

/**
 * View for Dropdown
 */
function DropdownView(props) {
    const classNames = ['alegrify-dropdown__container'];
    const { value } = props;

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    return (
        <div
            className={classNames.join(' ')}
            onKeyDown={props.handleKeyDown}
        >
            <input
                className="alegrify-dropdown__trigger"
                type="checkbox"
                id={props.id}
                onChange={props.handleOpenDropdown}
                checked={props.open}
            />
            <label
                className="alegrify-dropdown__label"
                htmlFor={props.id}
                aria-controls=""
            >
                {value ? value.props.children : props.placeholder || '...'}
            </label>
            <fieldset
                className="alegrify-dropdown"
                role="menu"
            >
                {renderChildren()}
            </fieldset>
        </div>
    );

    /**
     * Render dropdown items
     * (Can either be an array of children or React.children)
     */
    function renderChildren() {
        if (!props.open) {
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
            onSelect: () => props.handleSelectOption(index),
            multiSelect: props.multiSelect,
            checked: props.value && props.value.props.value === child.props.value,
            name: props.name,
            key: index
        });
    }
}


// Todo: disabled
// Todo: keyboard input

Dropdown.propTypes = {

    /**
     * Id of the dropdown
     */
    id: PropTypes.string.isRequired,

    /**
     * Name of the dropdown
     */
    name: PropTypes.string.isRequired,

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
    onValueChange: PropTypes.func
};
Dropdown.defaultProps = {
    value: null,
    placeholder: '...',
    disabled: false,
    multiSelect: false
};
Dropdown.propExamples = Dropdown.defaultProps;

export default Dropdown;
