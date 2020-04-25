"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

var _useKeydown = _interopRequireDefault(require("./hooks/use-keydown"));

var _useCloseOnEscape = _interopRequireDefault(require("./hooks/use-close-on-escape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var KEY_CODES = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32,
  ESCAPE: 27,
  TAB: 9
};
var noonce = 0;
/**
 * 
 * Dropdown
 * ```jsx
 * <Dropdown>
 *      <DropdownItem
 *          value="cookies"
 *      >
 *          Cookies
 *      </DropdownItem>
 *      <DropdownItem
 *          value="apples"
 *      >
 *          Apples
 *      </DropdownItem>
 * </Dropdown>
 * ```
 * 
 * @TODO: search/filter or filter by key press
 * 
 */

function Dropdown(props) {
  var _useState = (0, _react.useState)(findIndexOfSelectedOption()),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(typeof props.id === 'string' && props.id.trim() !== '' ? props.id : "alegrify-dropdown--".concat(++noonce)),
      _useState6 = _slicedToArray(_useState5, 1),
      id = _useState6[0];

  var stateScope = (0, _react.useRef)({
    active: active,
    open: open
  });

  var _useKeyDown = (0, _useKeydown["default"])(KEY_CODES.UP, KEY_CODES.DOWN, KEY_CODES.ENTER, KEY_CODES.TAB, KEY_CODES.SPACE),
      _useKeyDown2 = _slicedToArray(_useKeyDown, 5),
      onUpArrow = _useKeyDown2[0],
      onDownArrow = _useKeyDown2[1],
      onEnter = _useKeyDown2[2],
      onTab = _useKeyDown2[3],
      onSpace = _useKeyDown2[4];

  (0, _useCloseOnEscape["default"])(function () {
    return setOpen(false);
  });
  (0, _react.useEffect)(function () {
    onUpArrow(handleUpArrow);
    onDownArrow(handleDownArrow);
    onEnter(handleEnter);
    onSpace(handleEnter);
    onTab(handleTab);
    document.body.addEventListener('click', handleBodyClick);
    return function () {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setActive(findIndexOfSelectedOption());
  }, [props.value]);
  (0, _react.useEffect)(function () {
    stateScope.current.active = active;
  }, [active]);
  (0, _react.useEffect)(function () {
    stateScope.current.open = open;

    if (!open) {
      stateScope.current.active = findIndexOfSelectedOption();
    }
  }, [open]);
  var classNames = ['alegrify-dropdown'];
  var value = props.value;

  if (typeof props.className === 'string' && props.className.trim() !== '') {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, (0, _universalProps.applyAdditionalProps)(props), {
    className: classNames.join(' ')
  }), /*#__PURE__*/_react["default"].createElement("input", {
    className: "alegrify-dropdown__trigger",
    type: "checkbox",
    id: id,
    onChange: function onChange() {
      return setOpen(!open);
    },
    checked: open,
    disabled: props.disabled,
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    id: "".concat(id, "__label"),
    className: "alegrify-dropdown__label",
    htmlFor: id,
    "aria-role": "button",
    "aria-haspopup": "listbox"
  }, value ? value : props.placeholder), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "alegrify-dropdown__list",
    "data-menu-for": id,
    "aria-role": "listbox",
    "aria-labelledby": "".concat(id, "__label")
  }, renderChildren()));
  /**
   * When pressing up, set active to item above
   * @param {KeyboardEvent} keydownEvent 
   */

  function handleUpArrow(keydownEvent) {
    var _stateScope$current = stateScope.current,
        active = _stateScope$current.active,
        open = _stateScope$current.open;

    if (open) {
      keydownEvent.preventDefault();
      setActive(Math.max(0, active - 1));
    }
  }
  /**
   * When pressing down, set active to item below
   * @param {KeyboardEvent} keydownEvent 
   */


  function handleDownArrow(keydownEvent) {
    var _stateScope$current2 = stateScope.current,
        active = _stateScope$current2.active,
        open = _stateScope$current2.open;

    if (open) {
      keydownEvent.preventDefault();
      setActive(Math.min(getAmountOfChildren() - 1, active + 1));
    }
  }
  /**
   * When pressing enter, select active option
   * @param {KeyboardEvent} keydownEvent 
   */


  function handleEnter(keydownEvent) {
    var _stateScope$current3 = stateScope.current,
        active = _stateScope$current3.active,
        open = _stateScope$current3.open;

    if (open) {
      keydownEvent.preventDefault();
      handleSelectOption(active);
    }
  }
  /**
   * When pressing tab, go close the dropdown
   *  focus state will be on other element
   */


  function handleTab() {
    var open = stateScope.current.open;

    if (open) {
      setOpen(false);
    }
  }
  /**
   * When clicking body (aka clicking outside the dropdown),
   *  close the menu
   */


  function handleBodyClick(clickEvent) {
    var target = clickEvent.target;
    var open = stateScope.current.open;

    if (open) {
      var node = target;

      while (node !== document.body) {
        if (node.hasAttribute('data-menu-for') && node.getAttribute('data-menu-for') === "".concat(id)) {
          return;
        }

        node = node.parentNode;
      }

      setOpen(false);
    }
  }

  function findIndexOfSelectedOption() {
    var arrayOfChildren = Array.isArray(props.children) ? props.children : _react["default"].Children.toArray(props.children);
    return arrayOfChildren.findIndex(function (child) {
      return child.props.value === props.value;
    });
  }
  /**
   * @returns {Number}
   */


  function getAmountOfChildren() {
    return Array.isArray(props.children) ? props.children.length : _react["default"].Children.count(props.children);
  }
  /**
   * Fire change event with selected value
   *  and close the menu
   * @param {Number} index 
   */


  function handleSelectOption(index) {
    var arrayOfChildren = Array.isArray(props.children) ? props.children : _react["default"].Children.toArray(props.children);
    setOpen(false);
    setActive(index);

    if (arrayOfChildren[index]) {
      var selectedValue = arrayOfChildren[index].props.value;
      props.onValueChange(selectedValue);
    }
  }
  /**
   * Render dropdown items
   * (Can either be an array of children or React.children)
   */


  function renderChildren() {
    // Render all items server side for SEO
    if (typeof window !== 'undefined' && !open) {
      return null;
    }

    if (typeof props.children.map === 'function') {
      return props.children.map(renderChild);
    } else {
      return _react["default"].Children.map(props.children, renderChild);
    }
  }
  /**
   * Render single child
   * @param {Node} child 
   * @param {String} index 
   */


  function renderChild(child) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _react["default"].cloneElement(child, {
      onSelect: function onSelect() {
        return handleSelectOption(index);
      },
      onHover: function onHover() {
        return setActive(index);
      },
      checked: active === index,
      name: props.name,
      key: index
    });
  }
}

Dropdown.propTypes = {
  /**
   * Id of the dropdown
   */
  id: _propTypes["default"].string,

  /**
   * Name of the dropdown
   */
  name: _propTypes["default"].string,

  /**
   * Items for the dropdown
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Selected value of the dropdown
   */
  value: _propTypes["default"].string,

  /**
   * Placeholder message for dropdown label
   */
  placeholder: _propTypes["default"].string,

  /**
   * Should the dropdown be disabled?
   */
  disabled: _propTypes["default"].bool,

  /**
   * Gets triggered when value changes
   * Passes value string as argument
   */
  onValueChange: _propTypes["default"].func.isRequired
};
Dropdown.defaultProps = {
  value: null,
  placeholder: 'Please select...'
};

var _default = (0, _universalProps.attachUniversalProps)(Dropdown);

exports["default"] = _default;