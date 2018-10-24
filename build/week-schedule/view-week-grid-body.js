'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _viewTime = require('./view-time');

var _viewTime2 = _interopRequireDefault(_viewTime);

var _viewEmptyCell = require('./view-empty-cell');

var _viewEmptyCell2 = _interopRequireDefault(_viewEmptyCell);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewWeekGridBody />
 */
function WeekScheduleViewWeekGridBody(props) {
    var times = new Array(48).fill(null).map(function (nothing, index) {
        return (0, _helpers.formatTimeLabel)(index);
    });

    return _react2.default.createElement(
        'tbody',
        {
            className: 'alegrify-week-schedule__table-body'
        },
        times.map(function (time, index) {
            return _react2.default.createElement(
                'tr',
                {
                    className: 'alegrify-week-schedule__table-row'
                },
                _react2.default.createElement(
                    _viewTime2.default,
                    null,
                    index % props.cellsPerTimeLabel === 0 ? time : ''
                ),
                _constants.DEFAULT_WEEKDAY_LABELS.map(function () {
                    return _react2.default.createElement(_viewEmptyCell2.default, {
                        cellHeight: props.cellHeight
                    });
                })
            );
        })
    );
}

WeekScheduleViewWeekGridBody.propTypes = {
    cellsPerTimeLabel: _propTypes2.default.number,
    cellHeight: _propTypes2.default.number
};

exports.default = WeekScheduleViewWeekGridBody;