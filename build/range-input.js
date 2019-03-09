"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputWithState = require("./abstract/input-with-state");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <RangeInput />
 * 
 * ```jsx
 * <RangeInput
 *   id="my_range_input"
 *   name="my_range_input"
 *   min={1}
 *   max={10}
 *   value={6}
 * />
 * ```
 */
function RangeInput(props) {
  return (0, _inputWithState.wrapWithInputState)(RangeInputView)(props);
}

function RangeInputView(props) {
  var classNames = ['alegrify-range-input'];

  if (props.className) {
    classNames.push(props.className);
  }

  return _react.default.createElement("input", {
    type: "range",
    id: props.id,
    name: props.name,
    className: classNames.join(' '),
    disabled: props.disabled,
    onChange: function onChange(e) {
      return props.changeValue(e.target.value);
    },
    value: props.value,
    "data-low-indicator": props.lowIndicator,
    "data-high-indicator": props.highIndicator,
    min: props.min || 1,
    max: props.max || 10,
    step: props.step || 1
  });
}

RangeInput.propTypes = {
  /**
   * Additional classnames
   */
  className: _propTypes.default.string,

  /**
   * Input id
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Input name
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Input value
   */
  value: _propTypes.default.number,

  /**
   * Is range input disabled?
   */
  disabled: _propTypes.default.bool,

  /**
   * Indicator at the start of the range input
   */
  lowIndicator: _propTypes.default.string,

  /**
   * Indicator at the end of the range input
   */
  highIndicator: _propTypes.default.string,

  /**
   * Start of the range
   */
  min: _propTypes.default.number,

  /**
   * End of the range
   */
  max: _propTypes.default.number,

  /**
   * Range step
   */
  step: _propTypes.default.number,

  /**
   * On value change, param: number
   */
  onValueChange: _propTypes.default.func
};
RangeInput.defaultProps = {
  min: 1,
  max: 10,
  step: 1
};
RangeInput.propExamples = {
  className: '',
  id: 'rangeinput',
  name: 'rangeinput',
  value: 8,
  disabled: false,
  lowIndicator: '😥',
  highIndicator: '😍',
  min: 1,
  max: 10,
  step: 1
};
var _default = RangeInput;
exports.default = _default;