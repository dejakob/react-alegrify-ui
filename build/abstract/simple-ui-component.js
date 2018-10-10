'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleUiComponentPropTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleUiComponentPropTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    className: _propTypes2.default.string
};

/**
 * Simple component that passes props and attaches the className
 * @param {React.Component} el 
 * @param {String} className 
 * @param {Object} props 
 */
function SimpleUiComponent(el, className, props) {
    var classNames = [className];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return _react2.default.cloneElement(el, Object.assign({}, props, { className: classNames.join(' ') }));
}

exports.default = SimpleUiComponent;
exports.SimpleUiComponentPropTypes = SimpleUiComponentPropTypes;