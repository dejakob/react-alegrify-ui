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

var PROGRESS_MIN = 0;
var PROGRESS_MAX = 100;
/**
 * <Stepper />
 * 
 * ```jsx
 * <Stepper
 *   progress={50}
 *   steps={['step 1', 'step 2']}
 * />
 * ```
 */

function Stepper(props) {
  var classNames = ['alegrify-stepper'];

  if (props.className) {
    classNames.push(props.className);
  }

  var currentStep = Math.min(Math.floor(props.progress / 100 * (props.steps.length - 1)), props.steps.length - 1);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: "alegrify-stepper"
  }), /*#__PURE__*/_react["default"].createElement("progress", {
    className: "alegrify-stepper__progress",
    min: PROGRESS_MIN,
    max: PROGRESS_MAX,
    value: props.progress
  }), /*#__PURE__*/_react["default"].createElement("ol", {
    className: "alegrify-stepper__steps"
  }, props.steps.map(function (step, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: step,
      className: "alegrify-stepper__step".concat(index === currentStep ? ' alegrify-stepper__step--active' : ''),
      style: {
        width: "".concat(100 / props.steps.length, "%")
      }
    }, step);
  })));
}

Stepper.propTypes = {
  /**
   * Progress (value 0 - 100)
   */
  progress: _propTypes["default"].number,

  /**
   * Steps (strings)
   */
  steps: _propTypes["default"].arrayOf(_propTypes["default"].string)
};

var _default = (0, _universalProps.attachUniversalProps)(Stepper);

exports["default"] = _default;