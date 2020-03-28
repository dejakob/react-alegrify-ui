"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleUiComponentPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("../helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SimpleUiComponentPropTypes = {
  children: _propTypes["default"].node.isRequired,
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