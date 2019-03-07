"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var KEY_CODES = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  ESCAPE: 27,
  TAB: 9
};
/**
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
 */

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this));
    _this.changeSelectedIndex = _this.changeSelectedIndex.bind(_assertThisInitialized(_this));
    _this.handleBodyClick = _this.handleBodyClick.bind(_assertThisInitialized(_this));
    _this.actions = {
      handleSelectOption: _this.handleSelectOption.bind(_assertThisInitialized(_this)),
      handleOpenDropdown: _this.handleOpenDropdown.bind(_assertThisInitialized(_this)),
      handleKeyDown: _this.handleKeyDown.bind(_assertThisInitialized(_this))
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var childrenAsArray = typeof this.props.children.map === 'function' ? this.props.children : _react.default.Children.toArray(this.props.children);
      var value = childrenAsArray.find(function (child) {
        return _this2.props.value === child.props.value;
      });
      this.setState({
        value: value || null,
        open: false
      });

      if (typeof window !== 'undefined') {
        document.body.addEventListener('click', this.handleBodyClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        document.body.removeEventListener('click', this.handleBodyClick);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value !== this.state.value && newProps.value !== this.props.value) {
        var childrenAsArray = typeof newProps.children.map === 'function' ? newProps.children : _react.default.Children.toArray(newProps.children);
        var value = childrenAsArray.find(function (child) {
          return newProps.value === child.props.value;
        });
        this.setState({
          value: value || null
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(newProps, newState) {
      if ((newState.value && newState.value.props.value) !== (this.state.value && this.state.value.props.value)) {
        if (typeof this.props.onValueChange === 'function' && newState.value) {
          this.props.onValueChange(newState.value.props.value);
        }
      }
    }
  }, {
    key: "handleSelectOption",
    value: function handleSelectOption(index) {
      var childrenAsArray = typeof this.props.children.map === 'function' ? this.props.children : _react.default.Children.toArray(this.props.children);
      this.setState({
        value: childrenAsArray[index],
        open: false
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(eventData) {
      var keyCode = eventData.keyCode;

      switch (keyCode) {
        case KEY_CODES.UP:
          eventData.preventDefault();
          this.changeSelectedIndex(-1);
          break;

        case KEY_CODES.DOWN:
          eventData.preventDefault();
          this.changeSelectedIndex(1);
          break;

        case KEY_CODES.ENTER:
          eventData.preventDefault();
          this.setState({
            open: !this.state.open
          });
          break;

        case KEY_CODES.ESCAPE:
          eventData.preventDefault();
          this.setState({
            open: false
          });
          break;

        default:
          var query = String.fromCharCode(eventData.which || eventData.charCode);
          var childrenAsArray = typeof this.props.children.map === 'function' ? this.props.children : _react.default.Children.toArray(this.props.children);
          var index = Math.max(childrenAsArray.findIndex(function (child) {
            return child.props.value.toLowerCase().indexOf(query.toLowerCase()) > -1;
          }), 0);
          this.setState({
            value: childrenAsArray[index]
          });
      }
    }
  }, {
    key: "handleOpenDropdown",
    value: function handleOpenDropdown(eventData) {
      this.setState({
        open: eventData.target.checked
      });
    }
  }, {
    key: "changeSelectedIndex",
    value: function changeSelectedIndex(increment) {
      var _this3 = this;

      var childrenAsArray = typeof this.props.children.map === 'function' ? this.props.children : _react.default.Children.toArray(this.props.children);
      var currentIndex = Math.max(childrenAsArray.findIndex(function (child) {
        return _this3.state.value && _this3.state.value.props.value === child.props.value;
      }), 0);
      var newIndex = (currentIndex + childrenAsArray.length + increment) % childrenAsArray.length;
      this.setState({
        value: childrenAsArray[newIndex]
      });
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(eventData) {
      var target = eventData.target;
      var node = target;

      while (node !== document.body && node !== _reactDom.default.findDOMNode(this)) {
        node = node.parentNode;
      }

      if (node === document.body) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return DropdownView(Object.assign({}, this.props, this.state, this.actions));
    }
  }]);

  return Dropdown;
}(_react.Component);
/**
 * View for Dropdown
 */


function DropdownView(props) {
  var classNames = ['alegrify-dropdown__container'];
  var value = props.value;

  if (typeof props.className === 'string' && props.className.trim() !== '') {
    classNames.push(props.className);
  }

  if (props.disabled) {
    classNames.push('alegrify-dropdown--disabled');
  }

  return _react.default.createElement("div", {
    className: classNames.join(' '),
    onKeyDown: props.handleKeyDown
  }, _react.default.createElement("input", {
    className: "alegrify-dropdown__trigger",
    type: "checkbox",
    id: props.id,
    onChange: props.handleOpenDropdown,
    checked: props.open,
    disabled: props.disabled
  }), _react.default.createElement("label", {
    className: "alegrify-dropdown__label",
    htmlFor: props.id,
    "aria-controls": ""
  }, value ? value.props.children : props.placeholder || '...'), _react.default.createElement("fieldset", {
    className: "alegrify-dropdown",
    role: "menu"
  }, renderChildren()));
  /**
   * Render dropdown items
   * (Can either be an array of children or React.children)
   */

  function renderChildren() {
    if (!props.open) {
      return null;
    }

    if (typeof props.children.map === 'function') {
      return props.children.map(renderChild);
    } else {
      return _react.default.Children.map(props.children, renderChild);
    }
  }
  /**
   * Render single child
   * @param {Node} child 
   * @param {String} index 
   */


  function renderChild(child) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _react.default.cloneElement(child, {
      onSelect: function onSelect() {
        return props.handleSelectOption(index);
      },
      multiSelect: props.multiSelect,
      checked: props.value && props.value.props.value === child.props.value,
      name: props.name,
      key: index
    });
  }
} // Todo: disabled


Dropdown.propTypes = {
  /**
   * Id of the dropdown
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Name of the dropdown
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Items for the dropdown
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string,

  /**
   * Selected value of the dropdown
   */
  value: _propTypes.default.string,

  /**
   * Placeholder message for dropdown label
   */
  placeholder: _propTypes.default.string,

  /**
   * Should the dropdown be disabled?
   */
  disabled: _propTypes.default.bool,

  /**
   * Gets triggered when value changes
   * Passes value string as argument
   */
  onValueChange: _propTypes.default.func
};
Dropdown.defaultProps = {
  value: null,
  placeholder: '...',
  disabled: false,
  multiSelect: false
};
Dropdown.propExamples = Dropdown.defaultProps;
var _default = Dropdown;
exports.default = _default;