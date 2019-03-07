"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Button />
 * 
 * Regular HTML button
 * 
 * ```jsx
 * <Button
 *   primary
 * >
 *  Hi, I'm a primary button! 🎉
 * </Button>
 * ```
 */
function Button(props) {
  var classNames = ['alegrify-button'];
  classNames.push(props.className);

  if (props.primary) {
    classNames.push('alegrify-button--primary');
  }

  if (props.destructive) {
    classNames.push('alegrify-button--destructive');
  }

  if (props.full) {
    classNames.push('alegrify-button--full');
  }

  if (props.small) {
    classNames.push('alegrify-button--small');
  }

  if (props.large) {
    classNames.push('alegrify-button--large');
  }

  return _react.default.createElement("button", {
    className: classNames.join(' '),
    type: props.type || 'submit',
    disabled: props.disabled,
    onClick: props.onClick
  }, props.children);
}

Button.propTypes = {
  /**
   * Button text / button content
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string,

  /**
   * Is this a primary button?
   */
  primary: _propTypes.default.bool,

  /**
   * Is this a destructive button?
   */
  destructive: _propTypes.default.bool,

  /**
   * Is this a full width button?
   */
  full: _propTypes.default.bool,

  /**
   * Is this a small variant button?
   */
  small: _propTypes.default.bool,

  /**
   * Is this a large variant button?
   */
  large: _propTypes.default.bool,

  /**
   * button|submit
   */
  type: _propTypes.default.string,

  /**
   * Disabled?
   */
  disabled: _propTypes.default.bool,

  /**
   * Click action
   */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  primary: false,
  full: false,
  small: false,
  large: false,
  type: 'submit',
  disabled: false
};
Button.propExamples = {
  children: 'Yaay, I\'m a button 👋',
  primary: false,
  full: false,
  small: false,
  large: false,
  type: 'submit',
  disabled: false
};
var _default = Button;
exports.default = _default;