import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @abstract
 * Abstract for input components
 */
class AbstractInput extends Component {
    /**
     * On mount: set the value on the state
     */
    componentWillMount() {
        this.state = {
            value: (this.props.value || '')
        };
    }

    /**
     * Update the state value whenever prop value changes
     * @param {Object} newProps 
     */
    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.state.value) {
            this.setState({ value: newProps.value });
        }
    }

    /**
     * 
     */
    get inputProps() {
        return {
            value: this.state.value,
            onChange: AbstractInput.safeBindFunc('onChange').bind(this),
            onInput: AbstractInput.safeBindFunc('onInput').bind(this),
            onKeyDown: AbstractInput.safeBindFunc('onKeyDown').bind(this),
            onKeyUp: AbstractInput.safeBindFunc('onKeyUp').bind(this),
        }
    }

    /**
     * 
     * @param {String} name 
     */
    static safeBindFunc(name) {
        return function (...args) {
            if (typeof this.props[name] === 'function') {
                this.props[name](...args);
            }

            // Todo: update value
        }
    }

    render() {
        // Todo: render with {...this.inputProps}
        throw new Error('Cannot render abstract. Render method needs to be implemented on child');
    }
}

AbstractInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func
}

export default AbstractInput;
