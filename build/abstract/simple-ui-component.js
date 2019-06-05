"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleUiComponentPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("../helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var SimpleUiComponentPropTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,
  className: _propTypes["default"].string
};
/**
 * Simple component that passes props and attaches the className
 * @param {React.Component} el 
 * @param {String} className 
 * @param {Object} props 
 */

exports.SimpleUiComponentPropTypes = SimpleUiComponentPropTypes;

function SimpleUiComponent(el, className, props) {
  var classNames = [className].concat(_toConsumableArray((0, _universalProps.getAdditionalClassNames)(props)));

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  return _react["default"].cloneElement(el, Object.assign({}, props, {
    className: classNames.join(' ')
  }));
}

var _default = SimpleUiComponent;
exports["default"] = _default;