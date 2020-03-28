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
 * <Dialog />
 * 
 * ```jsx
 * <Dialog
 *   open={true}
 * >
 *   Some dialog content
 * </Dialog>
 * ```
 */
function Dialog(props) {
  var classNames = ['alegrify-dialog'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("dialog", {
    className: "alegrify-dialog",
    open: props.open
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-dialog__content"
  }, props.title ? /*#__PURE__*/_react["default"].createElement("h2", {
    className: "alegrify-dialog__title"
  }, props.title) : null, props.children, props.actions ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-dialog__actions"
  }, props.actions) : null));
}

Dialog.propTypes = {
  /**
   * Content
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Should the dialog be shown?
   */
  open: _propTypes["default"].bool,

  /**
   * Title to show inside the dialog
   */
  title: _propTypes["default"].string,

  /**
   * Actions to show inside the dialog
   */
  actions: _propTypes["default"].node
};
Dialog.defaultProps = {};

var _default = (0, _universalProps.attachUniversalProps)(Dialog);

exports["default"] = _default;