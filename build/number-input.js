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
 * <NumberInput />
 * @param {Object} props
 */
function NumberInput(props) {
    var classNames = ['alegrify-number-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.wide) {
        classNames.push('alegrify-number-input--wide');
    }

    if (props.full) {
        classNames.push('alegrify-number-input--full');
    }

    return _react2.default.createElement(
        'label',
        {
            htmlFor: props.id,
            className: classNames.join(' ')
        },
        _react2.default.createElement(
            'button',
            {
                className: 'alegrify-number-input__add',
                tabIndex: '-1',
                onClick: function onClick() {
                    return props.changeValue((props.value || 0) + 1);
                }
            },
            _react2.default.createElement(
                'span',
                null,
                '+'
            )
        ),
        _react2.default.createElement('input', {
            type: 'text',
            id: props.id,
            name: props.id,
            className: 'alegrify-number-input__input',
            value: Number(props.value || 0),
            disabled: props.disabled,
            onInput: onInput,
            onKeyUp: onKeyUp,
            onKeyDown: props.onKeyDown,
            onFocus: props.onFocus,
            onBlur: props.onBlur,
            autoComplete: 'off'
        }),
        _react2.default.createElement(
            'button',
            {
                className: 'alegrify-number-input__subtract',
                tabIndex: '-1',
                onClick: function onClick() {
                    return props.changeValue((props.value || 0) - 1);
                }
            },
            _react2.default.createElement(
                'span',
                null,
                '-'
            )
        )
    );

    function onInput(eventData) {
        var value = eventData.target.value;


        if (isNaN(Number(value))) {
            props.changeValue(0);
        } else {
            props.changeValue(Number(value));
        }
    }

    function onKeyUp(eventData) {
        switch (eventData.keyCode) {
            case 38:
                eventData.preventDefault();
                props.changeValue((props.value || 0) + 1);
                break;

            case 40:
                eventData.preventDefault();
                props.changeValue((props.value || 0) - 1);
                break;
        }

        if (typeof props.onKeyUp === 'function') {
            props.onKeyUp(eventData);
        }
    }
}

NumberInput.propTypes = {
    className: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    wide: _propTypes2.default.bool,
    full: _propTypes2.default.bool,

    onValueChange: _propTypes2.default.func
};

exports.default = (0, _inputWithState.wrapWithInputState)(NumberInput);