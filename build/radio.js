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
 * <Radio />
 * @param {Object} props
 */
function Radio(props) {
    var classNames = ['alegrify-radio'];

    if (props.className) {
        classNames.push(props.className);
    }

    if (props.disabled) {
        classNames.push('alegrify-radio--disabled');
    }

    return _react2.default.createElement(
        'div',
        {
            className: classNames.join(' ')
        },
        _react2.default.createElement('input', {
            type: 'radio',
            id: props.id,
            name: props.name,
            className: 'alegrify-radio__trigger',
            disabled: props.disabled,
            checked: props.checked,
            onChange: props.onChange
        }),
        _react2.default.createElement(
            'label',
            {
                htmlFor: props.id,
                className: 'alegrify-radio__check'
            },
            _react2.default.createElement(
                'span',
                {
                    className: 'alegrify-radio__label'
                },
                props.children
            )
        )
    );
}

Radio.propTypes = {
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    disabled: _propTypes2.default.bool,
    checked: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

exports.default = Radio;