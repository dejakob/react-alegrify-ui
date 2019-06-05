"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapWithInputState = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var INPUT_METHODS = ['changeValue', 'onInput'];
/**
 * @abstract
 */

var InputWithState =
/*#__PURE__*/
function (_Component) {
  _inherits(InputWithState, _Component);

  function InputWithState() {
    var _this;

    _classCallCheck(this, InputWithState);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputWithState).call(this));
    _this.methods = {};
    INPUT_METHODS.forEach(function (methodName) {
      _this.methods[methodName] = _this[methodName].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  _createClass(InputWithState, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        value: this.props.value || ''
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({
          value: newProps.value
        });
      }
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      if (value !== this.state.value) {
        this.setState({
          value: value
        });

        if (typeof this.props.onValueChange === 'function') {
          this.props.onValueChange(value);
        }
      }
    }
  }, {
    key: "onInput",
    value: function onInput(eventData) {
      var value = eventData.target.value;

      if (value !== this.state.value) {
        this.setState({
          value: value
        });

        if (typeof this.props.onValueChange === 'function') {
          this.props.onValueChange(value);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.renderMethod(this.allProps);
    }
  }, {
    key: "allProps",
    get: function get() {
      return _objectSpread({}, this.props, this.state, this.methods);
    }
  }]);

  return InputWithState;
}(_react.Component);

var wrapWithInputState = function wrapWithInputState(renderMethod) {
  return function (props) {
    return _react["default"].createElement(InputWithState, _extends({}, props, {
      renderMethod: renderMethod
    }));
  };
};

exports.wrapWithInputState = wrapWithInputState;