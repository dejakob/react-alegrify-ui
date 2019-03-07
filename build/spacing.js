"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpaceXS = SpaceXS;
exports.SpaceS = SpaceS;
exports.SpaceM = SpaceM;
exports.SpaceL = SpaceL;
exports.SpaceXL = SpaceXL;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPACING = {
  EXTRA_SMALL: 2,
  SMALL: 4,
  MEDIUM: 8,
  LARGE: 16,
  EXTRA_LARGE: 32
};

function SpaceXS(props) {
  return SpaceElement(props, 'extra-small');
}

function SpaceS(props) {
  return SpaceElement(props, 'small');
}

function SpaceM(props) {
  return SpaceElement(props, 'medium');
}

function SpaceL(props) {
  return SpaceElement(props, 'large');
}

function SpaceXL(props) {
  return SpaceElement(props, 'extra-large');
}

function SpaceElement(props, spaceVariant) {
  var classNames = (props.className || '').split(' ');
  classNames.push("alegrify-space--".concat(spaceVariant));
  return _react.default.cloneElement(props.children, {
    className: classNames.join(' ')
  });
}

var _default = SPACING;
exports.default = _default;