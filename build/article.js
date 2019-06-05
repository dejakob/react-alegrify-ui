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
 * <Article />
 * 
 * Simple HTML article.
 * 
 * Full width on smaller viewports, 2/3 on larger viewports
 * 
 * ```jsx
 * <Article>
 *   Amazing content
 * </Article>
 * ```
 */
function Article(props) {
  var classNames = ['alegrify-article'];

  if (typeof props.className === 'string') {
    classNames.push(props.className);
  }

  return _react["default"].createElement("article", {
    className: classNames.join(' ')
  }, props.children);
}

Article.propTypes = {
  /**
   * Content of the article
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes["default"].string
};
Article.propExamples = {
  children: 'Article content'
};

var _default = (0, _universalProps.attachUniversalProps)(Article);

exports["default"] = _default;