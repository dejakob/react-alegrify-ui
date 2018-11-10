import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

        this.actions = {
            handleSelectOption: this.handleSelectOption.bind(this)
        }
    }

    componentWillMount() {
        this.setState({
            value: this.props.value || null
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.state.value) {
            this.setState({
                value: newProps.value || null
            });
        }
    }

    handleSelectOption(eventData) {

    }

    render() {
        return DropdownView(
            Object.assign({}, this.props, this.state, this.actions)
        );
    }
}

/**
 * View for Dropdown
 */
function DropdownView(props) {
    const classNames = ['alegrify-dropdown__container'];

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    return (
        <div
            className={classNames.join(' ')}
        >
            <input
                className="alegrify-dropdown__trigger"
            />
            <label
                className="alegrify-dropdown__label"
                htmlFor="my-dropdown"
                aria-controls=""
            >
                {props.placeholder || '...'}
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
        if (typeof props.children.map === 'function') {
            return children.map(renderChild);
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
            onSelect: props.handleSelectOption,
            multiSelect: props.multiSelect,
            name: props.name,
            key: index
        });
    }
}


// Todo: disabled
// Todo: multiselect
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
     * Can multiple items be selected?
     */
    multiSelect: PropTypes.bool
};
Dropdown.defaultProps = {
    value: null,
    placeholder: '...',
    disabled: false,
    multiSelect: false
};
Dropdown.propExamples = Dropdown.defaultProps;

export default Dropdown;
