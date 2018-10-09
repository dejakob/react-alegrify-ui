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
 * <Alert />
 * @param {Object} props 
 */
function Alert(props) {
    var classNames = ['alegrify-alert'];

    classNames.push(props.className);

    return _react2.default.createElement(
        'dialog',
        {
            className: classNames.join(' '),
            open: props.open
        },
        props.children
    );
}

Alert.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string,
    open: _propTypes2.default.bool
};
Alert.propExamples = {
    children: 'Alert content',
    className: '',
    open: true
};

exports.default = Alert;