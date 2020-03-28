"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = _interopRequireDefault(require("../grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Preview(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_grid["default"], null);
}

var _default = Preview;
exports["default"] = _default;