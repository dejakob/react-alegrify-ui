"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VARIANTS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
var VARIANT_TO_CSS_VARIANT = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11
};
/**
 * <GridCell />
 * 
 * ```jsx
 * <GridCell
 *   three
 * >
 *   content...
 * </GridCell>
 * ```
 */

function GridCell(props) {
  var classNames = ['alegrify-grid__cell'];

  if (props.className) {
    classNames.push(props.className);
  }

  VARIANTS.forEach(function (variant) {
    if (props[variant] === true) {
      classNames.push("alegrify-grid__cell--".concat(VARIANT_TO_CSS_VARIANT[variant]));
    } else if (['small', 'medium', 'large'].indexOf(props[variant]) > -1) {
      classNames.push("alegrify-grid__cell--".concat(VARIANT_TO_CSS_VARIANT[variant], "@").concat(props[variant]));
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' '),
    role: "grid-cell"
  }), props.children);
}

GridCell.propTypes = _objectSpread({
  /**
   * Content
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
}, VARIANTS.reduce(function (accumulated, variant) {
  return _objectSpread({}, accumulated, _defineProperty({}, variant, _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['small', 'medium', 'large'])])));
}, {}));
GridCell.defaultProps = {};
GridCell.propExamples = {};

var _default = (0, _universalProps.attachUniversalProps)(GridCell);

exports["default"] = _default;