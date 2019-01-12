'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateIndicator = require('./date-indicator');

var _dateIndicator2 = _interopRequireDefault(_dateIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ```jsx
 * <HistoricItem
 *   date="2018-10-28T09:00:00"
 * >
 *     <H2>Something interesting happened</H2>
 *     <P>Lorem ipsum...</P>
 * </HistoricItem>
 * ```
 */
function HistoricItem(props) {
    var classNames = ['alegrify-historic-item'];

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'section',
        {
            className: classNames.join(' ')
        },
        _react2.default.createElement(_dateIndicator2.default, {
            className: 'alegrify-historic-item__date',
            date: props.date
        }),
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-historic-item__content'
            },
            props.children
        )
    );
}

HistoricItem.propTypes = {

    /**
     * Content for the historic item
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * Date to show / When did this occur?
     */
    date: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
};
HistoricItem.defaultProps = {
    children: null,
    date: new Date().toString(),
    className: ''
};
_dateIndicator2.default.propExamples = _dateIndicator2.default.defaultProps;

exports.default = HistoricItem;