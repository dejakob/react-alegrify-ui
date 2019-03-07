"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ```jsx
 * <DropdownItem
 *  id="cookies"
 *  name="cookies"
 *  value="cookies"
 * >
 *      cookies
 * </DropdownItem>
 * ```
 */
function DropdownItem(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
    className: "alegrify-dropdown__option",
    name: props.name,
    type: "radio",
    value: props.value,
    id: props.id,
    onChange: props.onSelect,
    checked: props.checked
  }), _react.default.createElement("label", {
    className: "alegrify-dropdown__option-label",
    htmlFor: props.id
  }, props.children));
}

DropdownItem.propTypes = {
  /**
   * Value of the item
   */
  value: _propTypes.default.string.isRequired,

  /**
   * Name of the item
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Id of the item
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Content for item
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
var _default = DropdownItem;
exports.default = _default;