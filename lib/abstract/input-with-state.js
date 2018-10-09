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

    get allProps() {
        const methods = {};

        INPUT_METHODS
            .forEach(inputMethod => {
                methods[inputMethod] = this[inputMethod]
            });

        return Object.assign(
            {},
            this.props,
            this.state,
            methods
        );
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
    const component = props => {
        return (
            <InputWithState 
                {...props}
                renderMethod={renderMethod}
            />
        );
    };

    component.propTypes = renderMethod.propTypes;
    component.propExamples = renderMethod.propExamples;
        
    return component;
};

export {
    wrapWithInputState
};
