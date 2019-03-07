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
 * <Input />
 * 
 * ```jsx
 * <Input
 *   id="my_input"
 *   name="my_input"
 *   multiline={true}
 *   value="default value"
 * />
 * ```
 */
function Input(props) {
  var Component = (0, _inputWithState.wrapWithInputState)(InputView);
  return _react.default.createElement(Component, props);
}

function InputView(props) {
  var classNames = ['alegrify-input'];

  if (props.className) {
    classNames.push(props.className);
  }

  if (props.full) {
    classNames.push('alegrify-input--full');
  }

  if (props.multiline) {
    var amountOfLines = ((props.value || '').match(/\n/gi) || []).length + 1;
    return _react.default.createElement("textarea", {
      id: props.id,
      name: props.name,
      className: classNames.join(' '),
      placeholder: props.placeholder || '',
      onInput: onInput,
      onKeyUp: props.onKeyUp,
      onKeyDown: props.onKeyDown,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      rows: amountOfLines,
      value: props.value,
      disabled: props.disabled
    });
  }

  return _react.default.createElement("input", {
    id: props.id,
    name: props.name,
    type: props.type || 'text',
    className: classNames.join(' '),
    placeholder: props.placeholder || '',
    value: props.value,
    disabled: props.disabled,
    onInput: onInput,
    onKeyUp: props.onKeyUp,
    onKeyDown: props.onKeyDown,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  });

  function onInput(eventData) {
    var value = eventData.target.value;
    props.changeValue(value);
  }
}

Input.propTypes = {
  /**
   * Value to show in the input
   */
  value: _propTypes.default.string.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string,

  /**
   * Input type
   */
  type: _propTypes.default.string,

  /**
   * Input placeholder
   */
  placeholder: _propTypes.default.string,

  /**
   * 100% width?
   */
  full: _propTypes.default.bool,

  /**
   * Use textarea instead of input
   */
  multiline: _propTypes.default.bool,

  /**
   * Disable input
   */
  disabled: _propTypes.default.bool,

  /**
   * Input id
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Input name
   */
  name: _propTypes.default.string.isRequired,

  /**
   * On value change method (passes value)
   */
  onValueChange: _propTypes.default.func,

  /**
   * Native onKeyUp event
   */
  onKeyUp: _propTypes.default.func,

  /**
   * Native onKeyDown event
   */
  onKeyDown: _propTypes.default.func,

  /**
   * Native onFocus event
   */
  onFocus: _propTypes.default.func,

  /**
   * Native onBlur event
   */
  onBlur: _propTypes.default.func
};
Input.defaultProps = {
  type: 'text'
};
Input.propExamples = {
  value: 'default value',
  className: '',
  type: 'text',
  placeholder: 'Placeholder text',
  full: false,
  multiline: false,
  id: 'input',
  name: 'input'
};
var _default = Input;
exports.default = _default;