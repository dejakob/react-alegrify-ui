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
 * <Main />
 * @param {Object} props
 */
function Main(props) {
    var classNames = ['alegrify-main'];

    if (props.className) {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'main',
        {
            className: classNames.join(' ')
        },
        props.children
    );
}

Main.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string
};
Main.propExamples = {
    children: 'Main content',
    className: ''
};

exports.default = Main;