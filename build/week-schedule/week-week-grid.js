'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _viewDays = require('./view-days');

var _viewDays2 = _interopRequireDefault(_viewDays);

var _viewWeekGridBody = require('./view-week-grid-body');

var _viewWeekGridBody2 = _interopRequireDefault(_viewWeekGridBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewWeekGrid />
 */
function WeekScheduleViewWeekGrid(props) {
    return _react2.default.createElement(
        'table',
        {
            className: 'alegrify-week-schedule__table',
            onDoubleClick: props.onDoubleClick,
            onTouchStart: props.onDoubleClick,
            ref: props.tableRef
        },
        _react2.default.createElement(_viewDays2.default, null),
        _react2.default.createElement(_viewWeekGridBody2.default, {
            cellsPerTimeLabel: props.cellsPerTimeLabel,
            cellHeight: props.cellHeight
        })
    );
}

WeekScheduleViewWeekGrid.propTypes = {
    onDoubleClick: _propTypes2.default.func,
    cellsPerTimeLabel: _propTypes2.default.number,
    cellHeight: _propTypes2.default.number,
    tableRef: _propTypes2.default.func
};

exports.default = WeekScheduleViewWeekGrid;