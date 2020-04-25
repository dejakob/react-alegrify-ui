"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

var _useCloseOnEscape = _interopRequireDefault(require("./hooks/use-close-on-escape"));

var _useModalFocus = _interopRequireDefault(require("./hooks/use-modal-focus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * <Drawer />
 * 
 * ```jsx
 * <Drawer
 *   open={true}
 *   onClose={() => {}}
 * >
 *   Some drawer content
 * </Drawer>
 * ```
 */
function Drawer(props) {
  var domRef = (0, _react.useRef)(null);
  (0, _useCloseOnEscape["default"])(props.onClose);
  (0, _useModalFocus["default"])(domRef.current, props.open);
  var classNames = ['alegrify-drawer'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("dialog", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    "class": classNames.join(' '),
    open: props.open,
    onClick: props.onClose,
    ref: domRef
  }), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "alegrify-drawer__content",
    onClick: function onClick(clickEvent) {
      return clickEvent.stopPropagation();
    }
  }, props.title ? /*#__PURE__*/_react["default"].createElement("h2", {
    "class": "alegrify-drawer__title"
  }, props.title) : null, props.children));
}

Drawer.propTypes = {
  /**
   * Content
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Should the dialog be shown?
   */
  open: _propTypes["default"].bool,

  /**
   * Close method
   */
  onClose: _propTypes["default"].func,

  /**
   * Title to show inside the dialog
   */
  title: _propTypes["default"].string
};
Drawer.defaultProps = {};

var _default = (0, _universalProps.attachUniversalProps)(Drawer);

exports["default"] = _default;