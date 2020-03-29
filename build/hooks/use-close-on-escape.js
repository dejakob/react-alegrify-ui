"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var ESCAPE_KEY = 27;
/**
 * Close modal/dropdown/... when pressing escape key
 * 
 * @example
 *   useCloseOnEscape(onClose);
 */

function useCloseOnEscape(closeMethod) {
  var callbackScope = (0, _react.useRef)({
    closeMethod: closeMethod
  });
  (0, _react.useEffect)(function () {
    window.addEventListener('keyup', handleKeyUp);
    return function () {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return [];
  /**
   * When pressing key up
   * @param {KeyboardEvent} keyUpEvent 
   */

  function handleKeyUp(keyUpEvent) {
    var closeMethod = callbackScope.current.closeMethod;
    var keyCode = keyUpEvent.keyCode;

    if (keyCode === ESCAPE_KEY && typeof closeMethod === 'function') {
      keyUpEvent.preventDefault();
      closeMethod();
    }
  }
}

var _default = useCloseOnEscape;
exports["default"] = _default;