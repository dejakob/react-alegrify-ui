'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapWithInputState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INPUT_METHODS = ['changeValue', 'onInput'];

/**
 * @abstract
 */

var InputWithState = function (_Component) {
    _inherits(InputWithState, _Component);

    function InputWithState() {
        _classCallCheck(this, InputWithState);

        var _this = _possibleConstructorReturn(this, (InputWithState.__proto__ || Object.getPrototypeOf(InputWithState)).call(this));

        INPUT_METHODS.forEach(function (methodName) {
            _this[methodName] = _this[methodName].bind(_this);
        });
        return _this;
    }

    _createClass(InputWithState, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                value: this.props.value || ''
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.value !== this.props.value) {
                this.setState({ value: newProps.value });
            }
        }
    }, {
        key: 'changeValue',
        value: function changeValue(value) {
            if (value !== this.state.value) {
                this.setState({ value: value });

                if (typeof this.props.onValueChange === 'function') {
                    this.props.onValueChange(value);
                }
            }
        }
    }, {
        key: 'onInput',
        value: function onInput(eventData) {
            var value = eventData.target.value;


            if (value !== this.state.value) {
                this.setState({ value: value });

                if (typeof this.props.onValueChange === 'function') {
                    this.props.onValueChange(value);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.renderMethod(this.allProps);
        }
    }, {
        key: 'allProps',
        get: function get() {
            var _this2 = this;

            var methods = {};

            INPUT_METHODS.forEach(function (inputMethod) {
                methods[inputMethod] = _this2[inputMethod];
            });

            return Object.assign({}, this.props, this.state, methods);
        }
    }]);

    return InputWithState;
}(_react.Component);

var wrapWithInputState = function wrapWithInputState(renderMethod) {
    var component = function component(props) {
        return _react2.default.createElement(InputWithState, _extends({}, props, {
            renderMethod: renderMethod
        }));
    };

    var methodPropTypes = {};

    component.propTypes = Object.assign({}, renderMethod.propTypes, methodPropTypes);

    return component;
};

exports.wrapWithInputState = wrapWithInputState;