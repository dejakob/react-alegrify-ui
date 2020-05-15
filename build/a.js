"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CSS_CLASSNAME = 'alegrify-a';
var VARIANTS = ['primary'];
/**
 * <A />
 */

function A(props) {
  var classNames = [CSS_CLASSNAME].concat(_toConsumableArray(VARIANTS.filter(function (variant) {
    return props[variant];
  }).map(function (variant) {
    return "".concat(CSS_CLASSNAME, "--").concat(variant);
  })));

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("a", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' '),
    id: props.id,
    href: props.href,
    title: props.title,
    target: props.target,
    rel: props.rel || (target === '_blank' ? 'noreferrer noopener' : undefined)
  }), props.children);
}

A.propTypes = _objectSpread({
  /**
   * Link text / content
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * href: required
   */
  href: _propTypes["default"].string.isRequired,

  /**
   * title: required
   */
  title: _propTypes["default"].string.isRequired,
  target: _propTypes["default"].string
}, (0, _helpers.variantsToPropTypes)(VARIANTS));

var _default = (0, _helpers.attachUniversalProps)(A);

exports["default"] = _default;