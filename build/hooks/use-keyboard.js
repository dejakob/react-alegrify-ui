"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useKeyboard() {
  var callbackScope = (0, _react.useRef)({});
  (0, _react.useEffect)(function () {
    window.addEventListener('keyup', handleKeyUp);
    return function () {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  for (var _len = arguments.length, keysToListenTo = new Array(_len), _key = 0; _key < _len; _key++) {
    keysToListenTo[_key] = arguments[_key];
  }

  return keysToListenTo.map(function (keyCode) {
    return function (listener) {
      callbackScope.current[keyCode] = listener;
    };
  });

  function handleKeyUp() {}
}

var _default = useKeyboard;
exports["default"] = _default;