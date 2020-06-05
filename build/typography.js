"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.P = P;
exports.Em = Em;
exports.Strong = Strong;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _simpleUiComponent = _interopRequireWildcard(require("./abstract/simple-ui-component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * <H1 />
 * @param {Object} props 
 */
function H1(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("h1", null), 'alegrify-h1', props);
}
/**
 * <H2 />
 * @param {Object} props 
 */


function H2(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("h2", null), 'alegrify-h2', props);
}
/**
 * <H3 />
 * @param {Object} props 
 */


function H3(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("h3", null), 'alegrify-h3', props);
}
/**
 * <P />
 * @param {Object} props 
 */


function P(props) {
  var classNames = ['alegrify-p'];

  if (props.welcome) {
    classNames.push('alegrify-p--welcome');
  }

  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("p", null), classNames.join(' '), props);
}
/**
 * <Em />
 * @param {Object} props 
 */


function Em(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("em", null), 'alegrify-em', props);
}
/**
 * <Strong />
 * @param {Object} props 
 */


function Strong(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("strong", null), 'alegrify-strong', props);
}

H1.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
H2.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
H3.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
P.propTypes = _objectSpread({}, _simpleUiComponent.SimpleUiComponentPropTypes, {
  welcome: _propTypes["default"].bool
});
Em.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Strong.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;