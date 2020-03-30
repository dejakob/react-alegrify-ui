"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isTouchDevice", {
  enumerable: true,
  get: function get() {
    return _device.isTouchDevice;
  }
});
Object.defineProperty(exports, "getAdditionalClassNames", {
  enumerable: true,
  get: function get() {
    return _universalProps.getAdditionalClassNames;
  }
});
Object.defineProperty(exports, "attachUniversalProps", {
  enumerable: true,
  get: function get() {
    return _universalProps.attachUniversalProps;
  }
});
Object.defineProperty(exports, "variantsToPropTypes", {
  enumerable: true,
  get: function get() {
    return _variantsToProptypes["default"];
  }
});

var _device = require("./device");

var _universalProps = require("./universal-props");

var _variantsToProptypes = _interopRequireDefault(require("./variants-to-proptypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }