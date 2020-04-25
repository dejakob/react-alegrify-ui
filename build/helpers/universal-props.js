"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdditionalClassNames = getAdditionalClassNames;
exports.attachUniversalProps = attachUniversalProps;
exports.applyAdditionalProps = applyAdditionalProps;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UNIVERSAL_CLASSES = {
  spaceXS: 'alegrify-space--extra-small',
  spaceS: 'alegrify-space--small',
  spaceM: 'alegrify-space--medium',
  spaceL: 'alegrify-space--large',
  spaceXL: 'alegrify-space--extra-large',
  textStart: 'alegrify-align-text--start',
  textCenter: 'alegrify-align-text--center',
  textEnd: 'alegrify-align-text--end',
  start: 'alegrify-align-child--start',
  center: 'alegrify-align-child--center',
  end: 'alegrify-align-child--end',
  top: 'alegrify-align-child--top',
  middle: 'alegrify-align-child--middle',
  bottom: 'alegrify-align-child--bottom'
};
var ADDITIONAL_PROP_TYPES = {
  dataTest: _propTypes.PropTypes.string,
  dataTestId: _propTypes.PropTypes.string
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

function applyAdditionalProps(props) {
  return {
    // Anchors for testing
    'data-test': props.dataTest,
    'data-test-id': props.dataTestId
  };
}

function attachUniversalProps(Component) {
  var WrappedComponent = function WrappedComponent(props) {
    var classNames = getAdditionalClassNames(props);
    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
      className: classNames.join(' ')
    }));
  };

  WrappedComponent.propTypes = _objectSpread({}, Component.propTypes, {
    ADDITIONAL_PROP_TYPES: ADDITIONAL_PROP_TYPES
  });
  WrappedComponent.defaultProps = Component.defaultProps;
  return WrappedComponent;
}