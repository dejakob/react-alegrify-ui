"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/**
 * Listen to a certain key
 * 
 * @param  {...number} keysToListenTo 
 * 
 * @example
 *   const [ onLeftArrow ] = useKeyUp(37);
 *   onLeftArrow(keyUpEvent => { doSomething(); });
 */
function useKeyUp() {
  for (var _len = arguments.length, keysToListenTo = new Array(_len), _key = 0; _key < _len; _key++) {
    keysToListenTo[_key] = arguments[_key];
  }

  var callbackScope = (0, _react.useRef)({});
  (0, _react.useEffect)(function () {
    window.addEventListener('keyup', handleKeyUp);
    return function () {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return keysToListenTo.map(function (keyCode) {
    return function (listener) {
      callbackScope.current[keyCode] = listener;
    };
  });

  function handleKeyUp(keyUpEvent) {
    if (keysToListenTo.indexOf(keyUpEvent.keyCode) > -1) {
      if (callbackScope.current[keyCode]) {
        callbackScope.current[keyCode](keyUpEvent);
      }
    }
  }
}

var _default = useKeyUp;
exports["default"] = _default;