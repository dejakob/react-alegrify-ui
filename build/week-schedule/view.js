"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _viewWeekGrid = _interopRequireDefault(require("./view-week-grid"));

var _viewRange = _interopRequireDefault(require("./view-range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleView />
 */
function WeekScheduleView(props) {
  var classNames = ['alegrify-week-schedule'];

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  return _react.default.createElement("div", {
    className: classNames.join(' '),
    onMouseMove: props.onGenericMouseMove,
    onTouchMove: props.onGenericMouseMove
  }, _react.default.createElement(_viewWeekGrid.default, {
    tableRef: props.tableRef,
    onDoubleClick: props.onDoubleClick,
    cellHeight: props.cellHeight,
    hoursPerCell: props.hoursPerCell,
    cellsPerTimeLabel: props.cellsPerTimeLabel
  }), _react.default.createElement("ul", {
    className: "alegrify-week-schedule__selections"
  }, props.ranges ? props.ranges.map(function (range, rangeIndex) {
    return _react.default.createElement(_viewRange.default, {
      range: range,
      onMouseDown: function onMouseDown(eventData) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return props.onRangeMouseDown(eventData, rangeIndex, options);
      },
      cellHeight: props.cellHeight,
      hoursPerCell: props.hoursPerCell
    });
  }) : null));
}

WeekScheduleView.propTypes = {
  onGenericMouseMove: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  tableRef: _propTypes.default.func,
  cellHeight: _propTypes.default.number,
  hoursPerCell: _propTypes.default.number,
  cellsPerTimeLabel: _propTypes.default.number,
  ranges: _propTypes.default.arrayOf(_propTypes.default.shape({
    from: _propTypes.default.number,
    till: _propTypes.default.number
  }))
};
var _default = WeekScheduleView;
exports.default = _default;