"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleUiComponentPropTypes = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleUiComponentPropTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  className: _propTypes.default.string
};
/**
 * Simple component that passes props and attaches the className
 * @param {React.Component} el 
 * @param {String} className 
 * @param {Object} props 
 */

exports.SimpleUiComponentPropTypes = SimpleUiComponentPropTypes;

function SimpleUiComponent(el, className, props) {
  var classNames = [className];

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  return _react.default.cloneElement(el, Object.assign({}, props, {
    className: classNames.join(' ')
  }));
}

var _default = SimpleUiComponent;
exports.default = _default;