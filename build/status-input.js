"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _button = _interopRequireDefault(require("./button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * <StatusInput />
 * 
 * ```jsx
 * <StatusInput
 * 
 * />
 * ```
 */
var StatusInput =
/*#__PURE__*/
function (_Component) {
  _inherits(StatusInput, _Component);

  function StatusInput() {
    var _this;

    _classCallCheck(this, StatusInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatusInput).call(this));
    _this.handleValueChange = _this.handleValueChange.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StatusInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        value: this.props.value || ''
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        className: "".concat(this.props.className, " alegrify-status-input--focus")
      });

      if (typeof this.props.onFocus === 'function') {
        this.props.onFocus();
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        className: this.props.className
      });

      if (typeof this.props.onFocus === 'function') {
        this.props.onBlur();
      }
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(eventData) {
      var value = eventData.target.value;
      this.setState({
        value: value
      });

      if (typeof this.props.onValueChange === 'function') {
        this.props.onValueChange(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return StatusInputView(Object.assign({}, this, this.props, this.state));
    }
  }]);

  return StatusInput;
}(_react.Component);
/**
 * <StatusInputView />
 * @param {Object} props 
 */


function StatusInputView(props) {
  var classNames = ['alegrify-status-input'];

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  var amountOfLines = (props.value.match(/\n/gi) || []).length + 1;
  return _react["default"].createElement("form", {
    className: classNames.join(' '),
    onSubmit: function onSubmit(eventData) {
      eventData.preventDefault();
      props.onSubmit(props.value);
    }
  }, _react["default"].createElement("textarea", {
    className: "alegrify-status-input__textarea",
    placeholder: props.placeholder,
    name: props.name,
    id: props.id,
    rows: amountOfLines,
    onInput: props.handleValueChange,
    onFocus: props.handleFocus,
    onBlur: props.handleBlur
  }), _react["default"].createElement("div", {
    className: "alegrify-status-input__submit"
  }, _react["default"].createElement(_button["default"], {
    primary: true,
    type: "submit",
    small: true
  }, props.submitLabel || 'Submit')), _react["default"].createElement("ul", {
    className: "alegrify-status-input__actions"
  }, props.actions && props.actions.map(function (action, index) {
    return _react["default"].createElement(StatusInputAction, {
      key: index,
      icon: action.icon,
      label: action.label,
      onClick: action.onClick
    });
  })));
}
/**
 * <StatusInputAction />
 * @param {Object} props 
 */


function StatusInputAction(props) {
  return _react["default"].createElement("li", {
    className: "alegrify-status-input__action"
  }, _react["default"].createElement("button", {
    className: "alegrify-status-input__action-button",
    "data-icon": props.icon,
    type: "button",
    onClick: props.onClick
  }, _react["default"].createElement("span", {
    className: "alegrify-status-input__action-button-label"
  }, props.label)));
}

StatusInput.propTypes = {
  className: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  submitLabel: _propTypes["default"].string,
  onValueChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    icon: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].string.isRequired,
    onClick: _propTypes["default"].func
  }))
};
StatusInput.propExamples = {
  className: '',
  placeholder: 'Share your thoughts',
  actions: [{
    label: 'picture',
    icon: 'camera_alt'
  }, {
    label: 'music',
    icon: 'audiotrack'
  }, {
    label: 'file',
    icon: 'attach_file'
  }]
};

var _default = (0, _universalProps.attachUniversalProps)(StatusInput);

exports["default"] = _default;