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
 *   const [ onLeftArrow ] = useKeyDown(37);
 *   onLeftArrow(keyDownEvent => { doSomething(); });
 */
function useKeyDown() {
  for (var _len = arguments.length, keysToListenTo = new Array(_len), _key = 0; _key < _len; _key++) {
    keysToListenTo[_key] = arguments[_key];
  }

  var callbackScope = (0, _react.useRef)({});
  (0, _react.useEffect)(function () {
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return keysToListenTo.map(function (keyCode) {
    return function (listener) {
      callbackScope.current[keyCode] = listener;
    };
  });

  function handleKeyDown(keyDownEvent) {
    if (keysToListenTo.indexOf(keyDownEvent.keyCode) > -1) {
      if (callbackScope.current[keyDownEvent.keyCode]) {
        callbackScope.current[keyDownEvent.keyCode](keyDownEvent);
      }
    }
  }
}

var _default = useKeyDown;
exports["default"] = _default;