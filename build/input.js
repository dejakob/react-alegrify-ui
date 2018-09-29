'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inputWithState = require('./abstract/input-with-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Input />
 * @param {Object} props 
 */
function Input(props) {
    var classNames = ['alegrify-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.full) {
        classNames.push('alegrify-input--full');
    }

    if (props.multiline) {
        return _react2.default.createElement(
            'textarea',
            {
                id: props.id,
                name: props.name,
                className: classNames.join(' '),
                onInput: props.onInput,
                onChange: props.onChange,
                onKeyUp: props.onKeyUp,
                onKeydown: props.onKeydown,
                onFocus: props.onFocus,
                onBlur: props.onBlur
            },
            props.value
        );
    }

    return _react2.default.createElement('input', {
        id: props.id,
        name: props.name,
        type: props.type || 'text',
        className: classNames.join(' '),
        placeholder: props.placeholder || '',
        value: props.value,
        onInput: onInput,
        onKeyUp: props.onKeyUp,
        onKeydown: props.onKeydown,
        onFocus: props.onFocus,
        onBlur: props.onBlur
    });

    function onInput(eventData) {
        var value = eventData.target.value;


        props.changeValue(value);
    }
}

Input.propTypes = {
    value: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string,
    type: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    full: _propTypes2.default.bool,
    multiline: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    name: _propTypes2.default.string,

    onValueChange: _propTypes2.default.func,
    onKeyUp: _propTypes2.default.func,
    onKeydown: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func
};

exports.default = (0, _inputWithState.wrapWithInputState)(Input);