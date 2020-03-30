"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = _interopRequireDefault(require("../grid"));

var _gridCell = _interopRequireDefault(require("../grid-cell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Preview(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_grid["default"], {
    stretch: true,
    bleed: true
  }, /*#__PURE__*/_react["default"].createElement(_gridCell["default"], {
    six: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: props.id
  }, children))), /*#__PURE__*/_react["default"].createElement(_gridCell["default"], {
    six: true
  }, /*#__PURE__*/_react["default"].createElement("pre", {
    className: "preview__pre"
  }, /*#__PURE__*/_react["default"].createElement("code", {
    className: "language-html"
  }, props.code.trim()))));
}

var _default = Preview;
exports["default"] = _default;