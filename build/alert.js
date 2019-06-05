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
 * <Alert />
 * 
 * Show a short and temporary message
 * 
 * ```jsx
 * <Alert
 *   open={true}
 * >
 *   Message sent
 * </Alert>
 * ```
 */
function Alert(props) {
  var classNames = ['alegrify-alert'];
  classNames.push(props.className);
  return _react["default"].createElement("dialog", {
    className: classNames.join(' '),
    open: props.open
  }, props.children);
}

Alert.propTypes = {
  /**
   * Content of the alert
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Show the alert?
   */
  open: _propTypes["default"].bool
};
Alert.propExamples = {
  children: 'Alert content',
  className: '',
  open: true
};

var _default = (0, _universalProps.attachUniversalProps)(Alert);

exports["default"] = _default;