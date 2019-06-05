"use strict";

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

var _simpleUiComponent = _interopRequireWildcard(require("./abstract/simple-ui-component"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * <H1 />
 * @param {Object} props 
 */
function H1(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("h1", null), 'alegrify-h1', props);
}
/**
 * <H2 />
 * @param {Object} props 
 */


function H2(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("h2", null), 'alegrify-h2', props);
}
/**
 * <H3 />
 * @param {Object} props 
 */


function H3(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("h3", null), 'alegrify-h3', props);
}
/**
 * <P />
 * @param {Object} props 
 */


function P(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("p", null), 'alegrify-p', props);
}
/**
 * <Em />
 * @param {Object} props 
 */


function Em(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("em", null), 'alegrify-em', props);
}
/**
 * <Strong />
 * @param {Object} props 
 */


function Strong(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("strong", null), 'alegrify-strong', props);
}

H1.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
H2.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
H3.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
P.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Em.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Strong.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;