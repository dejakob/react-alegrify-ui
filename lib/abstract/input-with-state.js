import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INPUT_METHODS = [
    'onInput',
    'onChange',
    'onKeyup',
    'onKeydown'
]

/**
 * @abstract
 */
class InputWithState extends Component {
    constructor() {
        super();

        INPUT_METHODS
            .forEach(methodName => {
                this[methodName] = this[methodName].bind(this);
            });
    }

    componentWillMount() {
        this.setState({
            value: this.props.value || ''
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({ value: newProps.value });
        }
    }

    get methods() {
        const collection = {};

        INPUT_METHODS
            .forEach(methodName => {
                collection[methodName] = this[methodName]
            });

        return collection;
    }

    get allProps() {
        return Object.assign(
            {},
            this.props,
            this.state
        );
    }

    onInput(eventData) {
        const { value } = eventData.target;

        if (value !== this.state.value) {
            this.setState({ value });
        }

        if (typeof this.props.onInput === 'function') {
            this.props.onInput(eventData);
        }
    }

    onChange(eventData) {
        const { value } = eventData.target;

        if (value !== this.state.value) {
            this.setState({ value });
        }

        if (typeof this.props.onInput === 'function') {
            this.props.onChange(eventData);
        }
    }

    onKeydown(eventData) {
        if (typeof this.props.onKeydown === 'function') {
            this.props.onKeydown(eventData);
        }
    }

    onKeyup(eventData) {
        if (typeof this.props.onKeyup === 'function') {
            this.props.onKeyup(eventData);
        }
    }

    render() {
        return React.cloneElement(this.props.renderMethod(this.allProps), this.methods);
    }
}

const wrapWithInputState = renderMethod => {
    const component = props => {
        return (
            <InputWithState 
                {...props}
                renderMethod={renderMethod}
            />
        );
    };

    const methodPropTypes = {};

    INPUT_METHODS
        .forEach(inputMethod => {
            methodPropTypes[inputMethod] = PropTypes.func
        });

    component.propTypes = Object.assign(
        {},
        renderMethod.propTypes,
        methodPropTypes
    );
        
    return component;
};

export {
    wrapWithInputState
};
