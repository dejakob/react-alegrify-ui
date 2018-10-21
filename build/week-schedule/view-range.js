'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _helpers = require('./helpers');

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
    var minutesTill = dateTill.getMinutes();

    // @Todo: What about cross day ranges?
    var timeDiffInMinutes = hoursTill * 60 + minutesTill - (hoursFrom * 60 + minutesFrom);
    var height = timeDiffInMinutes / 60 * hourHeight;

    // @Todo what about days that are not 86400
    var weekDayIndexFrom = (dateFrom.getDay() + 6) % 7;
    var offsetLeft = weekDayIndexFrom * _constants.DEFAULT_CELL_WIDTH;

    var style = (0, _helpers.heightCss)(height);
    style.top = offsetTop + 'px';
    style.left = offsetLeft + 'px';

    return _react2.default.createElement(
        'li',
        {
            className: 'alegrify-week-schedule__selection',
            style: style,
            onMouseDown: props.onMouseDown,
            onTouchStart: props.onMouseDown
        },
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-week-schedule__selection-content'
            },
            _react2.default.createElement('button', {
                className: 'alegrify-week-schedule__selection-resize-up',
                onMouseDown: function onMouseDown(e) {
                    return props.onMouseDown(e, { resize: 'TOP' });
                }
            }),
            _react2.default.createElement('button', {
                className: 'alegrify-week-schedule__selection-resize-down',
                onMouseDown: function onMouseDown(e) {
                    return props.onMouseDown(e, { resize: 'BOTTOM' });
                }
            })
        )
    );
}

WeekScheduleViewRange.propTypes = {
    onMouseDown: _propTypes2.default.func,
    cellHeight: _propTypes2.default.number,
    hoursPerCell: _propTypes2.default.number,
    range: _propTypes2.default.object
};

exports.default = WeekScheduleViewRange;