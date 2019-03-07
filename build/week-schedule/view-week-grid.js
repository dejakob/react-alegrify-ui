"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _viewDays = _interopRequireDefault(require("./view-days"));

var _viewWeekGridBody = _interopRequireDefault(require("./view-week-grid-body"));

var _device = require("../helpers/device");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewWeekGrid />
 */
function WeekScheduleViewWeekGrid(props) {
  return _react.default.createElement("table", {
    className: "alegrify-week-schedule__table",
    onDoubleClick: props.onDoubleClick,
    onClick: (0, _device.isTouchDevice)() ? props.onDoubleClick : null,
    ref: props.tableRef
  }, _react.default.createElement(_viewDays.default, null), _react.default.createElement(_viewWeekGridBody.default, {
    cellsPerTimeLabel: props.cellsPerTimeLabel,
    cellHeight: props.cellHeight
  }));
}

WeekScheduleViewWeekGrid.propTypes = {
  onDoubleClick: _propTypes.default.func,
  cellsPerTimeLabel: _propTypes.default.number,
  cellHeight: _propTypes.default.number,
  tableRef: _propTypes.default.func
};
var _default = WeekScheduleViewWeekGrid;
exports.default = _default;