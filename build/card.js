"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * <Card />
 * 
 * Card component
 * 
 * Consists out of a header, content and footer
 * 
 * ```jsx
 * <Card
 *  title="Card title"
 *  footer={<FooterComponent />}
 * >
 *   <P>
 *     Card content
 *   </P>
 * </Card>
 * ```
 */
function Card(props) {
  var classNames = ['alegrify-card'];
  var headerClassNames = ['alegrify-card__header'];
  var headerAdditionalStyle = {};

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  if (props.small) {
    classNames.push('alegrify-card--small');
  }

  if (typeof props.headerImage === 'string' && props.headerImage.length > 0) {
    headerClassNames.push('alegrify-card__header--background-image');
    headerAdditionalStyle.backgroundImage = "url(".concat(props.headerImage, ")");
  }

  return /*#__PURE__*/_react["default"].createElement("section", {
    className: classNames.join(' ')
  }, typeof props.title === 'string' && props.title.trim().length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: headerClassNames.join(' '),
    style: headerAdditionalStyle
  }, props.headerChildren, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "alegrify-card__title"
  }, props.title)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-card__content"
  }, props.children), props.footer ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-card__footer"
  }, props.footer) : null);
}

Card.propTypes = {
  /**
   * Card content
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Footer component
   */
  footer: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Small card variant
   */
  small: _propTypes["default"].bool,

  /**
   * Card title
   */
  title: _propTypes["default"].string,

  /**
   * Background image of the card header
   */
  headerImage: _propTypes["default"].string
};
Card.defaultProps = {
  className: '',
  footer: null,
  small: false,
  title: '',
  headerImage: ''
};

var _default = (0, _universalProps.attachUniversalProps)(Card);

exports["default"] = _default;