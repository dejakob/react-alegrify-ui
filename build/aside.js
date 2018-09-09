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
 * <Aside />
 * @param {Object} props 
 */
function Aside(props) {
    var classNames = ['alegrify-aside'];

    classNames.push(props.className);

    return _react2.default.createElement(
        'aside',
        {
            className: classNames.join(' ')
        },
        props.children
    );
}

Aside.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = Aside;