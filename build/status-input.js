'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * <StatusInput />
 */
var StatusInput = function (_Component) {
    _inherits(StatusInput, _Component);

    function StatusInput() {
        _classCallCheck(this, StatusInput);

        var _this = _possibleConstructorReturn(this, (StatusInput.__proto__ || Object.getPrototypeOf(StatusInput)).call(this));

        _this.handleValueChange = _this.handleValueChange.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    _createClass(StatusInput, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({ value: this.props.value || '' });
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({ className: this.props.className + ' alegrify-status-input--focus' });

            if (typeof this.props.onFocus === 'function') {
                this.props.onFocus();
            }
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.setState({ className: this.props.className });

            if (typeof this.props.onFocus === 'function') {
                this.props.onBlur();
            }
        }
    }, {
        key: 'handleValueChange',
        value: function handleValueChange(eventData) {
            var value = eventData.target.value;


            this.setState({ value: value });

            if (typeof this.props.onValueChange === 'function') {
                this.props.onValueChange(value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return StatusInputView(Object.assign({}, this, this.props, this.state));
        }
    }]);

    return StatusInput;
}(_react.Component);

/**
 * <StatusInputView />
 * @param {Object} props 
 */


function StatusInputView(props) {
    var classNames = ['alegrify-status-input'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    var amountOfLines = (props.value.match(/\n/gi) || []).length + 1;

    return _react2.default.createElement(
        'form',
        {
            className: classNames.join(' ')
        },
        _react2.default.createElement('textarea', {
            className: 'alegrify-status-input__textarea',
            placeholder: props.placeholder,
            name: 'alegrify-status-input1',
            id: 'alegrify-status-input1',
            rows: amountOfLines,
            onInput: props.handleValueChange,
            onFocus: props.handleFocus,
            onBlur: props.handleBlur
        }),
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-status-input__submit'
            },
            _react2.default.createElement(
                _button2.default,
                {
                    primary: true,
                    small: true
                },
                'Submit'
            )
        ),
        _react2.default.createElement(
            'ul',
            {
                className: 'alegrify-status-input__actions'
            },
            props.actions && props.actions.map(function (action, index) {
                return _react2.default.createElement(StatusInputAction, {
                    key: index,
                    icon: action.icon,
                    label: action.label,
                    onClick: action.onClick
                });
            })
        )
    );
}

/**
 * <StatusInputAction />
 * @param {Object} props 
 */
function StatusInputAction(props) {
    return _react2.default.createElement(
        'li',
        {
            className: 'alegrify-status-input__action'
        },
        _react2.default.createElement(
            'button',
            {
                className: 'alegrify-status-input__action-button',
                'data-icon': props.icon,
                type: 'button',
                onClick: props.onClick
            },
            _react2.default.createElement(
                'span',
                {
                    className: 'alegrify-status-input__action-button-label'
                },
                props.label
            )
        )
    );
}

StatusInput.propTypes = {
    className: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,

    onValueChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,

    actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        icon: _propTypes2.default.string.isRequired,
        label: _propTypes2.default.string.isRequired,
        onClick: _propTypes2.default.func
    }))
};
StatusInput.propExamples = {
    className: '',
    placeholder: 'Share your thoughts',
    actions: [{ label: 'picture', icon: 'camera_alt' }]
};

exports.default = StatusInput;