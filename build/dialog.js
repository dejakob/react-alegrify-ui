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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-dialog__wrapper",
    open: props.open
  }, /*#__PURE__*/_react["default"].createElement("dialog", {
    className: classNames.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-dialog__content"
  }, props.children)));
}

Dialog.propTypes = {
  /**
   * Content
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Should the dialog be shown?
   */
  open: _propTypes["default"].bool
};
Dialog.defaultProps = {
  open: false
};
Dialog.propExamples = {
  children: 'Add some content here',
  className: '',
  open: true
};

var _default = (0, _universalProps.attachUniversalProps)(Dialog);

exports["default"] = _default;