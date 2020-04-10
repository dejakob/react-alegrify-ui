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

  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: classNames.join(' ')
  }, props.children);
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