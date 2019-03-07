"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewTime />
 */
function WeekScheduleViewTime(props) {
  return _react.default.createElement("th", {
    className: "alegrify-week-schedule__time"
  }, props.children);
}

WeekScheduleViewTime.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
var _default = WeekScheduleViewTime;
exports.default = _default;