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
 * <Dialog />
 * @param {Object} props 
 */
function Dialog(props) {
    var classNames = ['alegrify-dialog'];

    if (props.className) {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'div',
        {
            className: 'alegrify-dialog__wrapper',
            open: props.open
        },
        _react2.default.createElement(
            'dialog',
            {
                className: classNames.join(' ')
            },
            _react2.default.createElement(
                'div',
                {
                    className: 'alegrify-dialog__content'
                },
                props.children
            )
        )
    );
}

Dialog.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string,
    open: _propTypes2.default.bool
};

exports.default = Dialog;