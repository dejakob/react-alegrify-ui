"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dt = Dt;
exports.Dd = Dd;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _simpleUiComponent = _interopRequireWildcard(require("./abstract/simple-ui-component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * <Dl />
 * @param {Object} props 
 */
function Dl(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("dl", null), 'alegrify-dl', props);
}
/**
 * <Dt />
 * @param {Object} props 
 */


function Dt(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("dt", null), 'alegrify-dl__dt', props);
}
/**
 * <Ds />
 * @param {Object} props 
 */


function Dd(props) {
  return (0, _simpleUiComponent["default"])( /*#__PURE__*/_react["default"].createElement("dd", null), 'alegrify-dl__dd', props);
}

Dl.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Dt.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Dd.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
var _default = Dl;
exports["default"] = _default;