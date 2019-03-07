"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Checkbox />
 * 
 * ```jsx
 * <Checkbox
 *  id="my_checkbox"
 *  name="my_checkbox"
 *  checked={false}
 * >
 *   I agree to GDPR, cookie banners, my local law and the fact that bears have feelings
 * </Checkbox>
 * ```
 */
function Checkbox(props) {
  var classNames = ['alegrify-checkbox'];
  classNames.push(props.className);

  if (props.disabled) {
    classNames.push('alegrify-checkbox--disabled');
  }

  return _react.default.createElement("div", {
    className: classNames.join(' ')
  }, _react.default.createElement("input", {
    type: "checkbox",
    id: props.id,
    name: props.name,
    className: "alegrify-checkbox__trigger",
    disabled: props.disabled,
    checked: props.checked,
    onChange: props.onChange
  }), _react.default.createElement("label", {
    htmlFor: props.id,
    className: "alegrify-checkbox__check"
  }, _react.default.createElement("span", {
    className: "alegrify-checkbox__label"
  }, props.children)));
}

Checkbox.propTypes = {
  /**
   * input id
   */
  id: _propTypes.default.string.isRequired,

  /**
   * input name
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Label content checkbox
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Is checkbox disabled?
   */
  disabled: _propTypes.default.bool,

  /**
   * Is checkbox checked?
   */
  checked: _propTypes.default.bool,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string
};
Checkbox.propExamples = {
  id: 'checkbox',
  name: 'checkbox',
  children: 'Look at this checkbox',
  disabled: false,
  checked: false,
  className: ''
};
var _default = Checkbox;
exports.default = _default;