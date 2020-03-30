"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  var classNames = ['alegrify-input'];

  if (props.className) {
    classNames.push(props.className);
  }

  if (props.full) {
    classNames.push('alegrify-input--full');
  }

  if (props.multiline) {
    var amountOfLines = ((props.value || '').match(/\n/gi) || []).length + 1;
    return /*#__PURE__*/_react["default"].createElement("textarea", {
      id: props.id,
      name: props.name,
      className: classNames.join(' '),
      placeholder: props.placeholder || '',
      onChange: onChange,
      onKeyUp: props.onKeyUp,
      onKeyDown: props.onKeyDown,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      rows: amountOfLines,
      value: props.value,
      disabled: props.disabled,
      error: props.error
    });
  }

  return /*#__PURE__*/_react["default"].createElement("input", {
    id: props.id,
    name: props.name,
    type: props.type || 'text',
    className: classNames.join(' '),
    placeholder: props.placeholder || '',
    value: props.value,
    disabled: props.disabled,
    onChange: onChange,
    onKeyUp: props.onKeyUp,
    onKeyDown: props.onKeyDown,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    error: props.error
  });

  function onChange(eventData) {
    var value = eventData.target.value;
    props.onValueChange(value);
  }
}

Input.propTypes = {
  /**
   * Value to show in the input
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * On value change method (passes value)
   */
  onValueChange: _propTypes["default"].func.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Input type
   */
  type: _propTypes["default"].string,

  /**
   * Input placeholder
   */
  placeholder: _propTypes["default"].string,

  /**
   * 100% width?
   */
  full: _propTypes["default"].bool,

  /**
   * Use textarea instead of input
   */
  multiline: _propTypes["default"].bool,

  /**
   * Disable input
   */
  disabled: _propTypes["default"].bool,

  /**
   * Input id
   */
  id: _propTypes["default"].string,

  /**
   * Input name
   */
  name: _propTypes["default"].string,

  /**
   * Native onKeyUp event
   */
  onKeyUp: _propTypes["default"].func,

  /**
   * Native onKeyDown event
   */
  onKeyDown: _propTypes["default"].func,

  /**
   * Native onFocus event
   */
  onFocus: _propTypes["default"].func,

  /**
   * Native onBlur event
   */
  onBlur: _propTypes["default"].func
};
Input.defaultProps = {
  type: 'text',
  placeholder: ''
};

var _default = (0, _universalProps.attachUniversalProps)(Input);

exports["default"] = _default;