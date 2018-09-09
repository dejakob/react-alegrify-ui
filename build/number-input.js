'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
                tabindex: '-1'
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
            value: props.value || 0,
            disabled: props.disabled
        }),
        _react2.default.createElement(
            'button',
            {
                className: 'alegrify-number-input__subtract',
                tabindex: '-1'
            },
            _react2.default.createElement(
                'span',
                null,
                '-'
            )
        )
    );
}

NumberInput.propTypes = {
    className: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    wide: _propTypes2.default.bool,
    full: _propTypes2.default.bool
};

exports.default = NumberInput;