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

var VARIANTS = ['left', 'center', 'right', 'outline', 'even', 'top', 'middle', 'bottom', 'stretch', 'bleed', 'reverse', 'all', 'small', 'large'];
/**
 * <Grid />
 * 
 * ```jsx
 * <Grid
 *   reversed
 * >
 *   <Article
 *      className="alegrify-grid__cell alegrify-grid__cell--8"
 *   />
 *   <Aside
 *      className="alegrify-grid__cell alegrify-grid__cell--4"
 *   />
 * </Grid>
 * ```
 */

function Grid(props) {
  var classNames = ['alegrify-grid'];

  if (props.className) {
    classNames.push(props.className);
  }

  VARIANTS.forEach(function (variant) {
    if (props[variant]) {
      classNames.push("alegrify-grid--".concat(variant));
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' '),
    role: "grid"
  }), props.children);
}

Grid.propTypes = {
  /**
   * Content
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Align cells left
   */
  left: _propTypes["default"].bool,

  /**
   * Align cells center
   */
  center: _propTypes["default"].bool,

  /**
   * Align cells right
   */
  right: _propTypes["default"].bool,

  /**
   * Align cells on top
   */
  top: _propTypes["default"].bool,

  /**
   * Align cells in the middle (vertically)
   */
  middle: _propTypes["default"].bool,

  /**
   * Align cells at the bottom
   */
  bottom: _propTypes["default"].bool,

  /**
   * Align cells outline
   */
  outline: _propTypes["default"].bool,

  /**
   * Align cells evenly (space-around)
   */
  even: _propTypes["default"].bool,

  /**
   * Reverse the order
   */
  reverse: _propTypes["default"].bool,

  /**
   * Also show grid on smaller screens
   */
  all: _propTypes["default"].bool
};
Grid.defaultProps = {};
Grid.propExamples = {};

var _default = (0, _universalProps.attachUniversalProps)(Grid);

exports["default"] = _default;