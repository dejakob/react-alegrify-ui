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
 * 
 * ```jsx
 * <Radio
 *   name="my_radio"
 *   id="my_radio"
 *   checked={true}
 * >
 *   Option value
 * </Radio>
 * ```
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

    /**
     * Input id
     */
    id: _propTypes2.default.string.isRequired,

    /**
     * Input value
     */
    name: _propTypes2.default.string.isRequired,

    /**
     * Radio label content
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Is radio disabled?
     */
    disabled: _propTypes2.default.bool,

    /**
     * Is radio checked?
     */
    checked: _propTypes2.default.bool,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string
};
Radio.propExamples = {
    id: 'radio',
    name: 'radio',
    children: 'Radio label',
    disabled: false,
    checked: false,
    className: ''
};

exports.default = Radio;