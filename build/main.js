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
 * <Main />
 * 
 * ```jsx
 * <Main>
 *   Page content...
 * </Main>
 * ```
 */
function Main(props) {
  var classNames = ['alegrify-main'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("main", {
    className: classNames.join(' ')
  }, props.children);
}

Main.propTypes = {
  /**
   * Main content
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};
Main.propExamples = {
  children: 'Main content',
  className: ''
};

var _default = (0, _universalProps.attachUniversalProps)(Main);

exports["default"] = _default;