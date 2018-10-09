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
 * <Button />
 * @param {Object} props 
 */
function Button(props) {
    var classNames = ['alegrify-button'];

    classNames.push(props.className);

    if (props.primary) {
        classNames.push('alegrify-button--primary');
    }

    if (props.full) {
        classNames.push('alegrify-button--full');
    }

    if (props.small) {
        classNames.push('alegrify-button--small');
    }

    return _react2.default.createElement(
        'button',
        {
            className: classNames.join(' '),
            type: props.type || 'submit',
            disabled: props.disabled
        },
        props.children
    );
}

Button.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string,
    primary: _propTypes2.default.bool,
    full: _propTypes2.default.bool,
    small: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    disabled: _propTypes2.default.bool
};
Button.propExamples = {
    children: 'Yaay, I\'m a button 👋',
    primary: false,
    full: false,
    small: false,
    type: 'submit',
    disabled: false
};

exports.default = Button;