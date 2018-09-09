'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO Work in progress

/**
 * @abstract
 * Abstract for input components
 */
var AbstractInput = function (_Component) {
    _inherits(AbstractInput, _Component);

    function AbstractInput() {
        _classCallCheck(this, AbstractInput);

        return _possibleConstructorReturn(this, (AbstractInput.__proto__ || Object.getPrototypeOf(AbstractInput)).apply(this, arguments));
    }

    _createClass(AbstractInput, [{
        key: 'componentWillMount',

        /**
         * On mount: set the value on the state
         */
        value: function componentWillMount() {
            this.state = {
                value: this.props.value || ''
            };
        }

        /**
         * Update the state value whenever prop value changes
         * @param {Object} newProps 
         */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.value !== this.state.value) {
                this.setState({ value: newProps.value });
            }
        }

        /**
         * 
         */

    }, {
        key: 'render',
        value: function render() {
            // Todo: render with {...this.inputProps}
            throw new Error('Cannot render abstract. Render method needs to be implemented on child');
        }
    }, {
        key: 'inputProps',
        get: function get() {
            return {
                value: this.state.value,
                onChange: AbstractInput.safeBindFunc('onChange').bind(this),
                onInput: AbstractInput.safeBindFunc('onInput').bind(this),
                onKeyDown: AbstractInput.safeBindFunc('onKeyDown').bind(this),
                onKeyUp: AbstractInput.safeBindFunc('onKeyUp').bind(this)
            };
        }

        /**
         * 
         * @param {String} name 
         */

    }], [{
        key: 'safeBindFunc',
        value: function safeBindFunc(name) {
            return function () {
                if (typeof this.props[name] === 'function') {
                    var _props;

                    (_props = this.props)[name].apply(_props, arguments);
                }

                // Todo: update value
            };
        }
    }]);

    return AbstractInput;
}(_react.Component);

AbstractInput.propTypes = {
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onInput: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    onKeyUp: _propTypes2.default.func
};

exports.default = AbstractInput;