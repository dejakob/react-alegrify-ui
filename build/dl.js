"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dt = Dt;
exports.Dd = Dd;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _simpleUiComponent = _interopRequireWildcard(require("./abstract/simple-ui-component"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * <Dl />
 * @param {Object} props 
 */
function Dl(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("dl", null), 'alegrify-dl', props);
}
/**
 * <Dt />
 * @param {Object} props 
 */


function Dt(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("dt", null), 'alegrify-dl__dt', props);
}
/**
 * <Ds />
 * @param {Object} props 
 */


function Dd(props) {
  return (0, _simpleUiComponent["default"])(_react["default"].createElement("dd", null), 'alegrify-dl__dd', props);
}

Dl.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Dt.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Dd.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
var _default = Dl;
exports["default"] = _default;