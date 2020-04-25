"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * <Body />
 */
function Body(props) {
  var classNames = ['alegrify-body'];
  var style;
  var content = props.children;

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  if (props.gradient) {}

  if (props.backgroundImage) {
    classNames.push('alegrify-body--fixed-background');
    style = _objectSpread({}, props.style || {}, {
      backgroundImage: "url(".concat(props.backgroundImage, ")")
    });
    content = /*#__PURE__*/_react["default"].createElement(BodyPageScroll, null, props.children);
  }

  return /*#__PURE__*/_react["default"].createElement("body", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' '),
    style: style
  }), content);
}

function BodyPageScroll(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-body__page-scroll"
  }, props.children);
}

Body.propTypes = {
  /**
   * Content of the article
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Additional classnames
   */
  style: _propTypes["default"].object,

  /**
   * Fixed background image
   */
  backgroundImage: _propTypes["default"].string,

  /**
   * Show gradient instead of fixed color
   */
  gradient: _propTypes["default"].string
};
var _default = Body;
exports["default"] = _default;