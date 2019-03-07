"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _viewTime = _interopRequireDefault(require("./view-time"));

var _viewEmptyCell = _interopRequireDefault(require("./view-empty-cell"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewWeekGridBody />
 */
function WeekScheduleViewWeekGridBody(props) {
  var times = new Array(48).fill(null).map(function (nothing, index) {
    return (0, _helpers.formatTimeLabel)(index);
  });
  return _react.default.createElement("tbody", {
    className: "alegrify-week-schedule__table-body"
  }, times.map(function (time, index) {
    return _react.default.createElement("tr", {
      className: "alegrify-week-schedule__table-row"
    }, _react.default.createElement(_viewTime.default, null, index % props.cellsPerTimeLabel === 0 ? time : ''), _constants.DEFAULT_WEEKDAY_LABELS.map(function () {
      return _react.default.createElement(_viewEmptyCell.default, {
        cellHeight: props.cellHeight
      });
    }));
  }));
}

WeekScheduleViewWeekGridBody.propTypes = {
  cellsPerTimeLabel: _propTypes.default.number,
  cellHeight: _propTypes.default.number
};
var _default = WeekScheduleViewWeekGridBody;
exports.default = _default;