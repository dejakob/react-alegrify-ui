"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = _interopRequireDefault(require("./grid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactRouterDom;

try {
  reactRouterDom = require('react-router-dom');
} catch (ex) {}
/**
 * ```jsx
 *  <Footer
 *      links={[
 *          { href: '/', title: 'Home', label: 'Home' },
 *          { href: '/info', title: 'Info', label: 'Info' },
 *      ]}
 *  >
 *      <Logo />
 *  </Footer>
 * ```
 */


function Footer(props) {
  return _react.default.createElement("footer", {
    className: "alegrify-footer"
  }, _react.default.createElement("div", {
    className: "alegrify-footer__content"
  }, _react.default.createElement(_grid.default, {
    all: true,
    outline: true,
    middle: true
  }, _react.default.createElement("nav", {
    className: "alegrify-footer__nav alegrify-grid__cell--4"
  }, _react.default.createElement("ul", {
    className: "alegrify-footer__nav-list"
  }, props.links.map(function (link, index) {
    return _react.default.createElement("li", {
      key: index,
      className: "alegrify-footer__nav-list-item"
    }, _react.default.createElement(FooterLink, {
      href: link.href,
      title: link.title
    }, link.label));
  }))), _react.default.createElement("div", {
    className: "alegrify-grid__cell--4 alegrify-footer__logo"
  }, props.logo), _react.default.createElement("div", {
    className: "alegrify-grid__cell--4 alegrify-footer__trademark"
  }, props.children))));
}

function FooterLink(props) {
  var EXTERNAL_LINK_START = ['http://', 'https://', '//'];
  var isExternalLink = typeof props.href === 'string' && EXTERNAL_LINK_START.some(function (linkStart) {
    return props.href.indexOf(linkStart) === 0;
  });

  if (isExternalLink || !reactRouterDom) {
    return _react.default.createElement("a", {
      href: props.href,
      title: props.title,
      className: "alegrify-footer__link"
    }, props.children);
  }

  var _reactRouterDom = reactRouterDom,
      Link = _reactRouterDom.Link;
  return _react.default.createElement(Link, {
    to: props.href,
    title: props.title,
    className: "alegrify-footer__link"
  }, props.children);
}

Footer.propTypes = {
  /**
   * Children to add on the end of the footer
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,

  /**
   * Additional classnames
   */
  className: _propTypes.default.string,

  /**
   * List of links to show in the footer
   */
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isReauired,
    href: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired
  })),

  /**
   * Logo component
   */
  logo: _propTypes.default.node
};
var _default = Footer;
exports.default = _default;