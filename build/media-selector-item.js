"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var noonce = 0;
/**
 * <MediaSelectorItem />
 */

function MediaSelectorItem(props) {
  var _useState = (0, _react.useState)(typeof props.id === 'string' && props.id.trim() !== '' ? props.id : "alegrify-selector-item--".concat(++noonce)),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var classNames = ['alegrify-media-selector__list-item'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("li", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' ')
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    name: props.name,
    id: id,
    className: "alegrify-media-selector__input",
    checked: props.checked,
    value: props.value
  }), /*#__PURE__*/_react["default"].createElement("figure", {
    className: "alegrify-media-selector__figure"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "alegrify-media-selector__image",
    src: props.image,
    alt: props.alt,
    width: props.width || 300,
    height: props.height || 300
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "alegrify-media-selector__label",
    htmlFor: id
  }, /*#__PURE__*/_react["default"].createElement("h3", null, props.title), /*#__PURE__*/_react["default"].createElement("p", null, props.description)));
}

MediaSelectorItem.propTypes = {
  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * form name
   */
  name: _propTypes["default"].string,

  /**
   * id attribute
   */
  id: _propTypes["default"].string,

  /**
   * Is this item selected?
   */
  checked: _propTypes["default"].bool,

  /**
   * form value
   */
  value: _propTypes["default"].string,

  /**
   * Image source
   */
  image: _propTypes["default"].string,

  /**
   * Alt for image
   */
  alt: _propTypes["default"].string,

  /**
   * Image width
   */
  width: _propTypes["default"].number,

  /**
   * Image height
   */
  height: _propTypes["default"].height,

  /**
   * Title of item
   */
  title: _propTypes["default"].string,

  /**
   * Description of item
   */
  description: _propTypes["default"].description
};

var _default = (0, _helpers.attachUniversalProps)(MediaSelectorItem);

exports["default"] = _default;