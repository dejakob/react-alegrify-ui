'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants.json');

var _viewDay = require('./view-day');

var _viewDay2 = _interopRequireDefault(_viewDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewDays />
 */
function WeekScheduleViewDays(props) {
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(_viewDay2.default, null),
            _constants.DEFAULT_WEEKDAY_LABELS.map(function (weekDay) {
                return _react2.default.createElement(
                    _viewDay2.default,
                    null,
                    weekDay
                );
            })
        )
    );
}

WeekScheduleViewDays.propTypes = {
    weekdayLabels: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
WeekScheduleViewDays.defaultProps = {
    weekdayLabels: _constants.DEFAULT_WEEKDAY_LABELS
};

exports.default = WeekScheduleViewDays;