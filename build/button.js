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
 * 
 * Regular HTML button
 * 
 * ```jsx
 * <Button
 *   primary
 * >
 *  Hi, I'm a primary button! 🎉
 * </Button>
 * ```
 */
function Button(props) {
    var classNames = ['alegrify-button'];

    classNames.push(props.className);

    if (props.primary) {
        classNames.push('alegrify-button--primary');
    }

    if (props.destructive) {
        classNames.push('alegrify-button--destructive');
    }

    if (props.full) {
        classNames.push('alegrify-button--full');
    }

    if (props.small) {
        classNames.push('alegrify-button--small');
    }

    if (props.large) {
        classNames.push('alegrify-button--large');
    }

    return _react2.default.createElement(
        'button',
        {
            className: classNames.join(' '),
            type: props.type || 'submit',
            disabled: props.disabled,
            onClick: props.onClick
        },
        props.children
    );
}

Button.propTypes = {

    /**
     * Button text / button content
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * Is this a primary button?
     */
    primary: _propTypes2.default.bool,

    /**
     * Is this a destructive button?
     */
    destructive: _propTypes2.default.bool,

    /**
     * Is this a full width button?
     */
    full: _propTypes2.default.bool,

    /**
     * Is this a small variant button?
     */
    small: _propTypes2.default.bool,

    /**
     * Is this a large variant button?
     */
    large: _propTypes2.default.bool,

    /**
     * button|submit
     */
    type: _propTypes2.default.string,

    /**
     * Disabled?
     */
    disabled: _propTypes2.default.bool,

    /**
     * Click action
     */
    onClick: _propTypes2.default.func
};
Button.defaultProps = {
    primary: false,
    full: false,
    small: false,
    large: false,
    type: 'submit',
    disabled: false
};
Button.propExamples = {
    children: 'Yaay, I\'m a button 👋',
    primary: false,
    full: false,
    small: false,
    large: false,
    type: 'submit',
    disabled: false
};

exports.default = Button;