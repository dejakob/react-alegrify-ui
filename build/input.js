'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inputWithState = require('./abstract/input-with-state');

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
  var classNames = ['alegrify-input'];

  if (props.className) {
    classNames.push(props.className);
  }

  if (props.full) {
    classNames.push('alegrify-input--full');
  }

  if (props.multiline) {
    return _react2.default.createElement(
      'textarea',
      {
        id: props.id,
        name: props.name,
        className: classNames.join(' '),
        placeholder: props.placeholder || '',
        onInput: onInput,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        onFocus: props.onFocus,
        onBlur: props.onBlur
      },
      props.value
    );
  }

  return _react2.default.createElement('input', {
    id: props.id,
    name: props.name,
    type: props.type || 'text',
    className: classNames.join(' '),
    placeholder: props.placeholder || '',
    value: props.value,
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
  value: _propTypes2.default.string.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes2.default.string,

  /**
   * Input type
   */
  type: _propTypes2.default.string,

  /**
   * Input placeholder
   */
  placeholder: _propTypes2.default.string,

  /**
   * 100% width?
   */
  full: _propTypes2.default.bool,

  /**
   * Use textarea instead of input
   */
  multiline: _propTypes2.default.bool,

  /**
   * Input id
   */
  id: _propTypes2.default.string.isRequired,

  /**
   * Input name
   */
  name: _propTypes2.default.string.isRequired,

  /**
   * On value change method (passes value)
   */
  onValueChange: _propTypes2.default.func,

  /**
   * Native onKeyUp event
   */
  onKeyUp: _propTypes2.default.func,

  /**
   * Native onKeyDown event
   */
  onKeyDown: _propTypes2.default.func,

  /**
   * Native onFocus event
   */
  onFocus: _propTypes2.default.func,

  /**
   * Native onBlur event
   */
  onBlur: _propTypes2.default.func
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

exports.default = (0, _inputWithState.wrapWithInputState)(Input);