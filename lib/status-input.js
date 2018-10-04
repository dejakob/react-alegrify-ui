import React, { Component } from 'react';
import Button from './button';
import PropTypes from 'prop-types';

/**
 * <StatusInput />
 */
class StatusInput extends Component {
    constructor() {
        super();

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentWillMount() {
        this.setState({ value: this.props.value || '' });
    }

    handleFocus() {
        this.setState({ className: `${this.props.className} alegrify-status-input--focus` });

        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus();
        }
    }

    handleBlur() {
        this.setState({ className: this.props.className });

        if (typeof this.props.onFocus === 'function') {
            this.props.onBlur();
        }
    }

    handleValueChange(eventData) {
        var { value } = eventData.target;

        this.setState({ value });

        if (typeof this.props.onValueChange === 'function') {
            this.props.onValueChange(value);
        }
    }

    render() {
        return StatusInputView(Object.assign({}, this, this.props, this.state));
    }
}

/**
 * <StatusInputView />
 * @param {Object} props 
 */
function StatusInputView(props) {
    const classNames = ['alegrify-status-input'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    const amountOfLines = (props.value.match(/\n/gi) || []).length + 1;
    
    return (
        <form
            className={classNames.join(' ')}
        >
            <textarea
                className="alegrify-status-input__textarea"
                placeholder="How are you feeling?"
                name="alegrify-status-input1"
                id="alegrify-status-input1"
                rows={amountOfLines}
                onInput={props.handleValueChange}
                onFocus={props.handleFocus}
                onBlur={props.handleBlur}
            ></textarea>
            <div
                className="alegrify-status-input__submit"
            >
                <Button
                    primary
                    small
                >
                    Submit
                </Button>
            </div>
            <ul
                className="alegrify-status-input__actions"
            >
                {props.actions && props.actions.map((action, index) =>
                    <StatusInputAction
                        key={index}
                        icon={action.icon}
                        label={action.label}
                        onClick={action.onClick}
                    />
                )}
            </ul>
        </form>
    )
}

/**
 * <StatusInputAction />
 * @param {Object} props 
 */
function StatusInputAction(props) {
    return (
        <li
            className="alegrify-status-input__action"
        >
            <button
                className="alegrify-status-input__action-button"
                data-icon={props.icon}
                type="button"
                onClick={props.onClick}
            >
                <span
                    className="alegrify-status-input__action-button-label"
                >
                    {props.label}    
                </span>
            </button>
        </li>
    );
}

StatusInput.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,

    onValueChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    charsLeftText: PropTypes.func,

    actions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func
        })
    )
};

export default StatusInput;