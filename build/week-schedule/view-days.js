"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _viewDay = _interopRequireDefault(require("./view-day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewDays />
 */
function WeekScheduleViewDays(props) {
  return _react.default.createElement("thead", {
    className: "alegrify-week-schedule__table-head"
  }, _react.default.createElement("tr", {
    className: "alegrify-week-schedule__table-row"
  }, _react.default.createElement(_viewDay.default, null), _constants.DEFAULT_WEEKDAY_LABELS.map(function (weekDay) {
    return _react.default.createElement(_viewDay.default, null, weekDay);
  })));
}

WeekScheduleViewDays.propTypes = {
  weekdayLabels: _propTypes.default.arrayOf(_propTypes.default.string)
};
WeekScheduleViewDays.defaultProps = {
  weekdayLabels: _constants.DEFAULT_WEEKDAY_LABELS
};
var _default = WeekScheduleViewDays;
exports.default = _default;