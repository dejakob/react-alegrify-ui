"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewDay />
 */
function WeekScheduleViewDay(props) {
  return _react.default.createElement("th", {
    className: "alegrify-week-schedule__day"
  }, props.children);
}

WeekScheduleViewDay.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
var _default = WeekScheduleViewDay;
exports.default = _default;