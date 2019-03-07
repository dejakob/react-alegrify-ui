"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewEmptyCell />
 */
function WeekScheduleViewEmptyCell(props) {
  return _react.default.createElement("td", {
    className: "alegrify-week-schedule__cell",
    style: (0, _helpers.heightCss)(props.cellHeight)
  });
}

WeekScheduleViewEmptyCell.propTypes = {};
var _default = WeekScheduleViewEmptyCell;
exports.default = _default;