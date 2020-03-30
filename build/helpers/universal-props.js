"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdditionalClassNames = getAdditionalClassNames;
exports.attachUniversalProps = attachUniversalProps;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UNIVERSAL_CLASSES = {
  spaceXS: 'alegrify-space--extra-small',
  spaceS: 'alegrify-space--small',
  spaceM: 'alegrify-space--medium',
  spaceL: 'alegrify-space--large',
  spaceXL: 'alegrify-space--extra-large'
};

function getAdditionalClassNames(props) {
  var classNames = (props.className || '').split(' ');
  Object.keys(UNIVERSAL_CLASSES).forEach(function (propName) {
    var className = UNIVERSAL_CLASSES[propName];

    if (props[propName]) {
      classNames.push(className);
    }
  });
  return classNames;
}

function attachUniversalProps(Component) {
  var WrappedComponent = function WrappedComponent(props) {
    var classNames = getAdditionalClassNames(props);
    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
      className: classNames.join(' ')
    }));
  };

  WrappedComponent.propTypes = Component.propTypes;
  WrappedComponent.defaultProps = Component.defaultProps;
  return WrappedComponent;
}