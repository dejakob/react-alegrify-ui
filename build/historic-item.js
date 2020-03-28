"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateIndicator = _interopRequireDefault(require("./date-indicator"));

var _universalProps = require("./helpers/universal-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ```jsx
 * <HistoricItem
 *   date="2018-10-28T09:00:00"
 * >
 *     <H2>Something interesting happened</H2>
 *     <P>Lorem ipsum...</P>
 * </HistoricItem>
 * ```
 */
function HistoricItem(props) {
  var classNames = ['alegrify-historic-item'];

  if (typeof props.className === 'string' && props.className.trim() !== '') {
    classNames.push(props.className);
  }

  return /*#__PURE__*/_react["default"].createElement("section", {
    className: classNames.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_dateIndicator["default"], {
    className: "alegrify-historic-item__date",
    date: props.date
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "alegrify-historic-item__content"
  }, props.children));
}

HistoricItem.propTypes = {
  /**
   * Content for the historic item
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string,

  /**
   * Date to show / When did this occur?
   */
  date: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired
};
HistoricItem.defaultProps = {
  children: null,
  date: new Date().toString(),
  className: ''
};
HistoricItem.propExamples = HistoricItem.defaultProps;

var _default = (0, _universalProps.attachUniversalProps)(HistoricItem);

exports["default"] = _default;