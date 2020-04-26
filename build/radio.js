"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * <Radio />
 * 
 * ```jsx
 * <Radio
 *   name="my_radio"
 *   id="my_radio"
 *   checked={true}
 * >
 *   Option value
 * </Radio>
 * ```
 */
function Radio(props) {
  var classNames = ['alegrify-radio'];

  if (props.className) {
    classNames.push(props.className);
  }

  if (props.disabled) {
    classNames.push('alegrify-radio--disabled');
  }

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' ')
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: props.id,
    name: props.name,
    className: "alegrify-radio__trigger",
    disabled: props.disabled,
    checked: props.checked,
    onChange: props.onChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: props.id,
    id: "".concat(props.id, "__label"),
    className: "alegrify-radio__view"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "alegrify-radio__check",
    role: "presentation",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "alegrify-radio__label"
  }, props.children)));
}

Radio.propTypes = {
  /**
   * Input id
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Input value
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Radio label content
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Is radio disabled?
   */
  disabled: _propTypes["default"].bool,

  /**
   * Is radio checked?
   */
  checked: _propTypes["default"].bool,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};
Radio.defaultProps = {
  disabled: false,
  checked: false,
  className: ''
};

var _default = (0, _universalProps.attachUniversalProps)(Radio);

exports["default"] = _default;