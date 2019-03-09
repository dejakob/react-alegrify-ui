import React, { Component } from 'react';

const INPUT_METHODS = [
    'changeValue',
    'onInput',
]

/**
 * @abstract
 */
class InputWithState extends Component {
    constructor() {
        super();

        this.methods = {};
        INPUT_METHODS
            .forEach(methodName => {
                this.methods[methodName] = this[methodName].bind(this)
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

    get allProps() {
        return {
            ...this.props,
            ...this.state,
            ...this.methods
        };
    }

    changeValue(value) {
        if (value !== this.state.value) {
            this.setState({ value });

            if (typeof this.props.onValueChange === 'function') {
                this.props.onValueChange(value);
            }
        }
    }

    onInput(eventData) {
        const { value } = eventData.target;

        if (value !== this.state.value) {
            this.setState({ value });

            if (typeof this.props.onValueChange === 'function') {
                this.props.onValueChange(value);
            }
        }
    }

    render() {
        return this.props.renderMethod(this.allProps);
    }
}

const wrapWithInputState = renderMethod => {
    return props => {
        return (
            <InputWithState 
                {...props}
                renderMethod={renderMethod}
            />
        );
    };
};

export {
    wrapWithInputState
};
