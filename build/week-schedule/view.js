'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _viewWeekGrid = require('./view-week-grid');

var _viewWeekGrid2 = _interopRequireDefault(_viewWeekGrid);

var _viewRange = require('./view-range');

var _viewRange2 = _interopRequireDefault(_viewRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleView />
 */
function WeekScheduleView(props) {
    var classNames = ['alegrify-week-schedule'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'div',
        {
            className: classNames.join(' '),
            onMouseMove: props.onGenericMouseMove,
            onTouchMove: props.onGenericMouseMove
        },
        _react2.default.createElement(_viewWeekGrid2.default, {
            tableRef: props.tableRef,
            onDoubleClick: props.onDoubleClick,
            cellHeight: props.cellHeight,
            hoursPerCell: props.hoursPerCell,
            cellsPerTimeLabel: props.cellsPerTimeLabel
        }),
        _react2.default.createElement(
            'ul',
            {
                className: 'alegrify-week-schedule__selections'
            },
            props.ranges.map(function (range, rangeIndex) {
                return _react2.default.createElement(_viewRange2.default, {
                    range: range,
                    onMouseDown: function onMouseDown(eventData) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        return props.onRangeMouseDown(eventData, rangeIndex, options);
                    },
                    cellHeight: props.cellHeight,
                    hoursPerCell: props.hoursPerCell
                });
            })
        )
    );
}

WeekScheduleView.propTypes = {
    onGenericMouseMove: _propTypes2.default.func,
    onDoubleClick: _propTypes2.default.func,
    tableRef: _propTypes2.default.func,
    cellHeight: _propTypes2.default.number,
    hoursPerCell: _propTypes2.default.number,
    cellsPerTimeLabel: _propTypes2.default.number,
    ranges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        from: _propTypes2.default.number,
        till: _propTypes2.default.number
    }))
};

exports.default = WeekScheduleView;