"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Convert an array of variants into a collection of propTypes
 * @param {Array.<String>} variants 
 * @returns {Object}
 */
function variantsToPropTypes(variants) {
  var propTypes = {};
  variants.forEach(function (variant) {
    propTypes[variant] = _propTypes["default"].bool;
  });
  return propTypes;
}

var _default = variantsToPropTypes;
exports["default"] = _default;