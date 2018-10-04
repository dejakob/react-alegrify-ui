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
 * <RangeInput />
 * @param {Object} props 
 */
function RangeInput(props) {
    var classNames = ['alegrify-range-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    return _react2.default.createElement('input', {
        type: 'range',
        id: props.id,
        name: props.name,
        className: classNames.join(' '),
        disabled: props.disabled,
        onChange: function onChange(e) {
            return props.changeValue(e.target.value);
        },
        value: props.value,
        'data-low-indicator': props.lowIndicator,
        'data-high-indicator': props.highIndicator,
        min: props.min || 1,
        max: props.max || 10,
        step: props.step || 1
    });
}

RangeInput.propTypes = {
    className: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    lowIndicator: _propTypes2.default.string,
    highIndicator: _propTypes2.default.string,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    step: _propTypes2.default.number,

    onValueChange: _propTypes2.default.func
};

exports.default = (0, _inputWithState.wrapWithInputState)(RangeInput);