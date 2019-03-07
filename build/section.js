"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _simpleUiComponent = _interopRequireWildcard(require("./abstract/simple-ui-component"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Section />
 */
function Section(props) {
  return (0, _simpleUiComponent.default)(_react.default.createElement("section", null), 'alegrify-section', props);
}

Section.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
var _default = Section;
exports.default = _default;