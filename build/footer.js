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
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "alegrify-footer"
  }, props.children);
}

Footer.propTypes = {
  /**
   * Children to add to the footer
   */
  children: _propTypes["default"].node.isRequired
};
Footer.defaultProps = {};

var _default = (0, _universalProps.attachUniversalProps)(Footer);

exports["default"] = _default;