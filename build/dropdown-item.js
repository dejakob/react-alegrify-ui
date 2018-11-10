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
 * ```jsx
 * <DropdownItem
 *  id="cookies"
 *  name="cookies"
 *  value="cookies"
 * >
 *      cookies
 * </DropdownItem>
 * ```
 */
function DropdownItem(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('input', {
            className: 'alegrify-dropdown__option',
            name: props.name,
            type: 'radio',
            value: props.value,
            id: props.id,
            onChange: props.onSelect,
            checked: props.checked
        }),
        _react2.default.createElement(
            'label',
            {
                className: 'alegrify-dropdown__option-label',
                htmlFor: props.id
            },
            props.children
        )
    );
}

DropdownItem.propTypes = {
    /**
     * Value of the item
     */
    value: _propTypes2.default.string.isRequired,

    /**
     * Id of the item
     */
    id: _propTypes2.default.string.isRequired,

    /**
     * Content for item
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired

};

exports.default = DropdownItem;