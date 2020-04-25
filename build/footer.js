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
 * ```jsx
 *  <Footer>
 *      <Logo />
 *  </Footer>
 * ```
 */
function Footer(props) {
  var classNames = ['alegrify-footer'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("footer", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' ')
  }), props.children);
}

Footer.propTypes = {
  /**
   * Children to add to the footer
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Additional classNames
   */
  className: _propTypes["default"].string
};
Footer.defaultProps = {};

var _default = (0, _universalProps.attachUniversalProps)(Footer);

exports["default"] = _default;