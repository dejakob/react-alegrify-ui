'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <WeekScheduleViewEmptyCell />
 */
function WeekScheduleViewEmptyCell(props) {
    return _react2.default.createElement('td', {
        className: 'alegrify-week-schedule__cell',
        style: (0, _helpers.heightCss)(props.cellHeight)
    });
}

WeekScheduleViewEmptyCell.propTypes = {};

exports.default = WeekScheduleViewEmptyCell;