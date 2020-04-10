"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_HEIGHT = 400;
var DEFAULT_WIDTH = '100%';
var noonce = 0;
/**
 * <Card />
 * 
 * Card component
 */

function Card(props) {
  var _useState = (0, _react.useState)(typeof props.id === 'string' && props.id.trim() !== '' ? props.id : "alegrify-card--".concat(++noonce)),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var containerClassNames = ['alegrify-card'];
  var height = props.height || DEFAULT_HEIGHT;
  var width = props.width || DEFAULT_WIDTH;

  if (typeof props.className === 'string' && props.className.trim() !== '') {
    containerClassNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: props.checkType || 'checkbox',
    className: "alegrify-card__trigger",
    "aria-hidden": "true",
    id: id,
    name: props.name,
    value: props.value
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: containerClassNames.join(' '),
    htmlFor: id,
    style: {
      height: "".concat(height, "px"),
      width: typeof width === 'number' ? "".concat(width, "px") : '100%',
      minWidth: typeof width === 'number' ? "".concat(width, "px") : 0
    }
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "alegrify-card__figure",
    style: {
      height: "".concat(height, "px"),
      width: typeof width === 'number' ? "".concat(width, "px") : '100%',
      minWidth: typeof width === 'number' ? "".concat(width, "px") : 0
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "alegrify-card__image",
    src: props.image,
    alt: props.alt,
    height: height,
    width: width
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-card__title-overlay"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "alegrify-card__title"
  }, props.title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-card__content",
    "data-title": props.title
  }, props.children)));
}

Card.propTypes = {
  /**
   * Card content
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Footer component
   */
  title: _propTypes["default"].string.isRequired,

  /**
   * Image source for the card image
   */
  image: _propTypes["default"].string.isRequired,

  /**
   * Image alt for the card image
   */
  alt: _propTypes["default"].string.isRequired,

  /**
   * HTML id for the card trigger element
   */
  id: _propTypes["default"].string,

  /**
   * Either checkbox or radio
   */
  checkType: _propTypes["default"].string,

  /**
   * Name attr of the card
   */
  name: _propTypes["default"].string,

  /**
   * Value attr of the card
   */
  value: _propTypes["default"].string,

  /**
   * Height of the card
   */
  height: _propTypes["default"].number,

  /**
   * Width of the card
   */
  width: _propTypes["default"].number,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};
Card.defaultProps = {
  height: DEFAULT_HEIGHT
};

var _default = (0, _helpers.attachUniversalProps)(Card);

exports["default"] = _default;