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
 * <Checkbox />
 * 
 * ```jsx
 * <Checkbox
 *  id="my_checkbox"
 *  name="my_checkbox"
 *  checked={false}
 * >
 *   I agree to GDPR, cookie banners, my local law and the fact that bears have feelings
 * </Checkbox>
 * ```
 */
function Checkbox(props) {
    var classNames = ['alegrify-checkbox'];

    classNames.push(props.className);

    if (props.disabled) {
        classNames.push('alegrify-checkbox--disabled');
    }

    return _react2.default.createElement(
        'div',
        {
            'class': classNames.join(' ')
        },
        _react2.default.createElement('input', {
            type: 'checkbox',
            id: props.id,
            name: props.name,
            className: 'alegrify-checkbox__trigger',
            disabled: props.disabled,
            checked: props.checked,
            onChange: props.onChange
        }),
        _react2.default.createElement(
            'label',
            {
                htmlFor: props.id,
                className: 'alegrify-checkbox__check'
            },
            _react2.default.createElement(
                'span',
                {
                    className: 'alegrify-checkbox__label'
                },
                props.children
            )
        )
    );
}

Checkbox.propTypes = {

    /**
     * input id
     */
    id: _propTypes2.default.string.isRequired,

    /**
     * input name
     */
    name: _propTypes2.default.string.isRequired,

    /**
     * Label content checkbox
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Is checkbox disabled?
     */
    disabled: _propTypes2.default.bool,

    /**
     * Is checkbox checked?
     */
    checked: _propTypes2.default.bool,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string
};
Checkbox.propExamples = {
    id: 'checkbox',
    name: 'checkbox',
    children: 'Look at this checkbox',
    disabled: false,
    checked: false,
    className: ''
};

exports.default = Checkbox;