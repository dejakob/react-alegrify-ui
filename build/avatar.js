"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * <Avatar />
 */
function Avatar(props) {
  var classNames = ['alegrify-avatar'];

  if (props.className) {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("figure", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' '),
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: props.image,
    className: "alegrify-avatar__image",
    alt: props.alt
  }));
}

Avatar.propTypes = {
  /**
   * avatar image
   */
  image: _propTypes["default"].string.isRequired,

  /**
   * Alt for image
   */
  alt: _propTypes["default"].string.isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};

var _default = (0, _helpers.attachUniversalProps)(Avatar);

exports["default"] = _default;