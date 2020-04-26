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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CSS_CLASSNAME = 'alegrify-avatar';
var VARIANTS = {
  xs: 'extra-small',
  s: 'small',
  l: 'large',
  xl: 'extra-large'
};
var IMAGE_SIZES = {
  "default": 64,
  xs: 16,
  s: 16,
  l: 100,
  xl: 200
};
/**
 * <Avatar />
 */

function Avatar(props) {
  var classNames = [CSS_CLASSNAME].concat(_toConsumableArray(Object.keys(VARIANTS).filter(function (variant) {
    return props[variant];
  }).map(function (variant) {
    return "".concat(CSS_CLASSNAME, "--").concat(VARIANTS[variant]);
  })));
  var imageSize = IMAGE_SIZES[Object.keys(VARIANTS).find(function (variant) {
    return props[variant];
  }) || 'default'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("figure", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' '),
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: props.image,
    className: "alegrify-avatar__image",
    alt: props.alt,
    height: imageSize,
    width: imageSize
  }));
}

Avatar.propTypes = {
  /**
   * avatar image
   */
  image: _propTypes["default"].string.isRequired,

  /**
   * Alt for image
   */
  alt: _propTypes["default"].string.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};

var _default = (0, _helpers.attachUniversalProps)(Avatar);

exports["default"] = _default;