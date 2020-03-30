"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PropsTable(props) {
  var Component = props.Component;
  var defaultProps = Component.defaultProps,
      propTypes = Component.propTypes;
  return /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Property"), /*#__PURE__*/_react["default"].createElement("th", null, "Type"), /*#__PURE__*/_react["default"].createElement("th", null, "Default"))), /*#__PURE__*/_react["default"].createElement("tbody", null, Object.keys(propTypes).map(function (propName) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: propName
    }, /*#__PURE__*/_react["default"].createElement("th", null, propName, isRequired(propTypes[propName]) ? '*' : ''), /*#__PURE__*/_react["default"].createElement("td", null, getCorrespondingPropType(propTypes[propName])), /*#__PURE__*/_react["default"].createElement("td", null, defaultProps[propName] || ''));
  })));
}
/**
 * 
 * @param propDefinition 
 * @returns {String}
 */


function getCorrespondingPropType(propDefinition) {
  return Object.keys(_propTypes["default"]).find(function (propName) {
    return _propTypes["default"][propName] === propDefinition || _propTypes["default"][propName].isRequired === propDefinition;
  }) || 'any';
}
/**
 * 
 * @param propDefinition 
 * @returns {String}
 */


function isRequired(propDefinition) {
  return Object.keys(_propTypes["default"]).some(function (propName) {
    return _propTypes["default"][propName].isRequired === propDefinition;
  });
}

var _default = PropsTable;
exports["default"] = _default;