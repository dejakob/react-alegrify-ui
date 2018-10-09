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
 * 
 * ```jsx
 * <NumberInput
 *   id="number_input"
 *   name="number_input"
 *   min={1}
 *   value={6}
 *   max={10}
 * />
 * ```
 */
function NumberInput(props) {
    var classNames = ['alegrify-number-input'];
    var min = props.min || 0;
    var max = props.max || 10;
    var value = Math.max(Math.min(max, props.value), min);

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
                onClick: up
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
            name: props.name,
            className: 'alegrify-number-input__input',
            value: value,
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
                onClick: down
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

        var number = Number(value);

        if (isNaN(number)) {
            props.changeValue(0);
        } else if (number < min) {
            props.changeValue(min);
        } else if (number > max) {
            props.changeValue(max);
        } else {
            props.changeValue(number);
        }
    }

    function onKeyUp(eventData) {
        switch (eventData.keyCode) {
            case 38:
                eventData.preventDefault();
                up();
                break;

            case 40:
                eventData.preventDefault();
                down();
                break;
        }

        if (typeof props.onKeyUp === 'function') {
            props.onKeyUp(eventData);
        }
    }

    function up() {
        props.changeValue(Math.min(max, (props.value || 0) + 1));
    }

    function down() {
        props.changeValue(Math.max(min, (props.value || 0) - 1));
    }
}

NumberInput.propTypes = {

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * Input id
     */
    id: _propTypes2.default.string.isRequired,

    /**
     * Input name
     */
    name: _propTypes2.default.string.isRequired,

    /**
     * Input value, must be a number
     */
    value: _propTypes2.default.number,

    /**
     * Is input disabled?
     */
    disabled: _propTypes2.default.bool,

    /**
     * Is this a wide variant?
     */
    wide: _propTypes2.default.bool,

    /**
     * 100% width?
     */
    full: _propTypes2.default.bool,

    /**
     * Min value
     */
    min: _propTypes2.default.number,

    /**
     * Max value
     */
    max: _propTypes2.default.number,

    /**
     * On value change, param: number value
     */
    onValueChange: _propTypes2.default.func
};
NumberInput.defaultProps = {
    min: 0,
    max: 10,
    value: 0,
    wide: false,
    full: false,
    disabled: false
};
NumberInput.propExamples = {
    className: '',
    id: 'number_input',
    name: 'number_input',
    value: 6,
    disabled: false,
    wide: false,
    full: false,
    min: 1,
    max: 10
};

exports.default = (0, _inputWithState.wrapWithInputState)(NumberInput);