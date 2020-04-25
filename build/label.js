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

/**
 * <Label />
 * 
 * ```jsx
 * <Label
 *   htmlFor="input_id"
 *   error
 * >
 *   Something went wrong
 * </Label>
 * ```
 */
function Label(props) {
  var classNames = ['alegrify-label'];

  if (props.className) {
    classNames.push(props.className);
  }

  if (props.error) {
    classNames.push('alegrify-label--error');
  }

  return /*#__PURE__*/_react["default"].createElement("label", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    htmlFor: props.htmlFor,
    className: classNames.join(' ')
  }), props.children);
}

Label.propTypes = {
  /**
   * Label content
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * for attribute referring to a form element
   */
  htmlFor: _propTypes["default"].string,

  /**
   * Is this an error label?
   */
  error: _propTypes["default"].bool
};
Label.defaultProps = {
  className: '',
  error: false
};

var _default = (0, _universalProps.attachUniversalProps)(Label);

exports["default"] = _default;