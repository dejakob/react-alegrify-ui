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
 * 
 * ```jsx
 * <Label
 *   htmlFor="input_id"
 *   error
 * >
 *   Something went wrong
 * </Label>
 * ```
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
            htmlFor: props.htmlFor,
            className: classNames.join(' ')
        },
        props.children
    );
}

Label.propTypes = {

    /**
     * Label content
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * for attribute referring to a form element
     */
    htmlFor: _propTypes2.default.string,

    /**
     * Is this an error label?
     */
    error: _propTypes2.default.bool
};
Label.defaultProps = {
    error: false
};
Label.propExamples = {
    children: 'Label content',
    className: '',
    htmlFor: 'input_id',
    error: false
};

exports.default = Label;