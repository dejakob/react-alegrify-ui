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
 * <Alert />
 * 
 * Show a short and temporary message
 * 
 * ```
 *   <Alert
 *     open={true}
 *   >
 *     Message sent
 *   </Alert>
 * ```
 */
function Alert(props) {
    var classNames = ['alegrify-alert'];

    classNames.push(props.className);

    return _react2.default.createElement(
        'dialog',
        {
            className: classNames.join(' '),
            open: props.open
        },
        props.children
    );
}

Alert.propTypes = {

    /**
     * Content of the alert
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * Show the alert?
     */
    open: _propTypes2.default.bool
};
Alert.propExamples = {
    children: 'Alert content',
    className: '',
    open: true
};

exports.default = Alert;