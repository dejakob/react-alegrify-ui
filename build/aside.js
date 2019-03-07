"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Aside />
 * 
 * Simple HTML aside
 * 
 * Small viewports: full width,
 * 
 * Large viewports: 1/3 width
 * 
 * ```jsx
 * <Aside>
 *  Some extra information on the side
 * </Aside>
 * ```
 */
function Aside(props) {
  var classNames = ['alegrify-aside'];

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  return _react.default.createElement("aside", {
    className: classNames.join(' ')
  }, props.children);
}

Aside.propTypes = {
  /**
   * Content of the aside
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string
};
Aside.propExamples = {
  children: 'Aside content'
};
var _default = Aside;
exports.default = _default;