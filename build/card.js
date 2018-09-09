'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Card />
 * @param {Object} props 
 */
function Card(props) {
    var classNames = ['alegrify-card'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    if (props.small) {
        classNames.push('alegrify-card--small');
    }

    return _react2.default.createElement(
        'section',
        {
            className: classNames.join(' ')
        },
        props.children
    );
}

Card.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string,
    small: _propTypes2.default.bool
};

exports.default = Card;