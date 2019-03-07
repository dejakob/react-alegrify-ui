"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if (props[variant]) {
      classNames.push("alegrify-grid__cell--".concat(VARIANT_TO_CSS_VARIANT[variant]));
    }
  });
  return _react.default.createElement("div", {
    className: classNames.join(' ')
  }, props.children);
}

GridCell.propTypes = {
  /**
   * Content
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string,
  one: _propTypes.default.bool,
  two: _propTypes.default.bool,
  three: _propTypes.default.bool,
  four: _propTypes.default.bool,
  five: _propTypes.default.bool,
  six: _propTypes.default.bool,
  seven: _propTypes.default.bool,
  eight: _propTypes.default.bool,
  nine: _propTypes.default.bool,
  ten: _propTypes.default.bool,
  eleven: _propTypes.default.bool
};
GridCell.defaultProps = {};
GridCell.propExamples = {};
var _default = GridCell;
exports.default = _default;