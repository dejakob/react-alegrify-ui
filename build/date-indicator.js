'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <DateIndicator />
 * 
 * ```jsx
 * <DateIndicator
 *   date={'2018-10-28T00:00:00'}
 * />
 * ```
 */
function DateIndicator(props) {
    var classNames = ['alegrify-date-indicator'];

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    var momentDate = (0, _moment2.default)(props.date);

    return _react2.default.createElement(
        'time',
        {
            className: classNames.join(' '),
            datetime: momentDate.format()
        },
        _react2.default.createElement(
            'span',
            {
                className: 'alegrify-date-indicator__month'
            },
            momentDate.format('MMM')
        ),
        _react2.default.createElement(
            'span',
            {
                className: 'alegrify-date-indicator__day'
            },
            momentDate.format('D')
        )
    );
}

DateIndicator.propTypes = {

    /**
     * Content
     */
    date: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string
};
DateIndicator.defaultProps = {
    date: new Date().toString(),
    className: ''
};
DateIndicator.propExamples = DateIndicator.defaultProps;

exports.default = DateIndicator;