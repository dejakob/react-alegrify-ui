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
 * <Label />
 * @param {Object} props
 */
function Label(props) {
    var classNames = ['alegrify-label'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.error) {
        classNames.push('alegrify-error');
    }

    return _react2.default.createElement(
        'label',
        {
            htmlFor: props.id,
            className: classNames.join(' ')
        },
        props.children
    );
}

Label.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string,
    htmlFor: _propTypes2.default.string,
    error: _propTypes2.default.bool
};

exports.default = Label;