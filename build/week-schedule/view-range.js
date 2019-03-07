"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewRange />
 */
function WeekScheduleViewRange(props) {
  var hourHeight = props.cellHeight / props.hoursPerCell;
  var dateFrom = new Date(props.range.from);
  var hoursFrom = dateFrom.getHours();
  var minutesFrom = dateFrom.getMinutes();
  var offsetTop = (0, _helpers.calculateOffsetTop)(hoursFrom, minutesFrom, hourHeight);
  var dateTill = new Date(props.range.till);
  var hoursTill = dateTill.getHours();
  var minutesTill = dateTill.getMinutes(); // @Todo: What about cross day ranges?

  var timeDiffInMinutes = hoursTill * 60 + minutesTill - (hoursFrom * 60 + minutesFrom);
  var height = timeDiffInMinutes / 60 * hourHeight; // @Todo what about days that are not 86400

  var weekDayIndexFrom = (dateFrom.getDay() + 6) % 7;
  var offsetLeft = weekDayIndexFrom * _constants.DEFAULT_CELL_WIDTH;
  var style = (0, _helpers.heightCss)(height);
  style.top = "".concat(offsetTop, "px");
  style.left = "".concat(offsetLeft, "px");
  return _react.default.createElement("li", {
    className: "alegrify-week-schedule__selection",
    style: style,
    onMouseDown: props.onMouseDown,
    onTouchStart: props.onMouseDown
  }, _react.default.createElement("div", {
    className: "alegrify-week-schedule__selection-content"
  }, _react.default.createElement("button", {
    className: "alegrify-week-schedule__selection-resize-up",
    onMouseDown: function onMouseDown(e) {
      return props.onMouseDown(e, {
        resize: 'TOP'
      });
    }
  }), _react.default.createElement("button", {
    className: "alegrify-week-schedule__selection-resize-down",
    onMouseDown: function onMouseDown(e) {
      return props.onMouseDown(e, {
        resize: 'BOTTOM'
      });
    }
  })));
}

WeekScheduleViewRange.propTypes = {
  onMouseDown: _propTypes.default.func,
  cellHeight: _propTypes.default.number,
  hoursPerCell: _propTypes.default.number,
  range: _propTypes.default.object
};
var _default = WeekScheduleViewRange;
exports.default = _default;