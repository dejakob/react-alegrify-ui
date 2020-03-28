"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * <DateIndicator />
 * 
 * ```jsx
 * <DateIndicator
 *   date={'2018-10-28T00:00:00'}
 * />
 * ```
 */
function DateIndicator(props) {
  var classNames = ['alegrify-date-indicator'];

  if (typeof props.className === 'string' && props.className.trim() !== '') {
    classNames.push(props.className);
  }

  var momentDate = (0, _moment["default"])(props.date);
  return /*#__PURE__*/_react["default"].createElement("time", {
    className: classNames.join(' '),
    dateTime: momentDate.format()
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "alegrify-date-indicator__month"
  }, momentDate.format('MMM')), /*#__PURE__*/_react["default"].createElement("span", {
    className: "alegrify-date-indicator__day"
  }, momentDate.format('D')));
}

DateIndicator.propTypes = {
  /**
   * Content
   */
  date: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};
DateIndicator.defaultProps = {
  date: new Date().toString(),
  className: ''
};
DateIndicator.propExamples = DateIndicator.defaultProps;

var _default = (0, _universalProps.attachUniversalProps)(DateIndicator);

exports["default"] = _default;