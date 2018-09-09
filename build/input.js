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
 * <Input />
 * @param {Object} props 
 */
function Input(props) {
    var classNames = ['alegrify-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.full) {
        classNames.push('alegrify-input--full');
    }

    if (props.multiline) {
        return _react2.default.createElement(
            'textarea',
            {
                id: props.id,
                name: props.name,
                className: classNames.join(' ')
            },
            props.children
        );
    }

    return _react2.default.createElement('input', {
        id: props.id,
        name: props.name,
        type: props.type || 'text',
        className: classNames.join(' '),
        placeholder: props.placeholder || '',
        value: props.children
    });
}

Input.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string,
    type: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    full: _propTypes2.default.bool,
    multiline: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
};

exports.default = Input;