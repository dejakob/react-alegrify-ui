'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactRouterDom = void 0;

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
    return _react2.default.createElement(
        'footer',
        {
            className: 'alegrify-footer'
        },
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-footer__content'
            },
            _react2.default.createElement(
                _grid2.default,
                {
                    all: true,
                    outline: true,
                    middle: true
                },
                _react2.default.createElement(
                    'nav',
                    {
                        className: 'alegrify-footer__nav alegrify-grid__cell--4'
                    },
                    _react2.default.createElement(
                        'ul',
                        {
                            className: 'alegrify-footer__nav-list'
                        },
                        props.links.map(function (link, index) {
                            return _react2.default.createElement(
                                'li',
                                {
                                    key: index,
                                    className: 'alegrify-footer__nav-list-item'
                                },
                                _react2.default.createElement(
                                    FooterLink,
                                    {
                                        href: link.href,
                                        title: link.title
                                    },
                                    link.label
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'alegrify-grid__cell--4 alegrify-footer__logo'
                    },
                    props.logo
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'alegrify-grid__cell--4 alegrify-footer__trademark'
                    },
                    props.children
                )
            )
        )
    );
}

function FooterLink(props) {
    var EXTERNAL_LINK_START = ['http://', 'https://', '//'];

    var _reactRouterDom = reactRouterDom,
        Link = _reactRouterDom.Link;

    var isExternalLink = typeof props.href === 'string' && EXTERNAL_LINK_START.some(function (linkStart) {
        return props.href.indexOf(linkStart) === 0;
    });

    if (isExternalLink || !reactRouterDom) {
        return _react2.default.createElement(
            'a',
            {
                href: props.href,
                title: props.title,
                className: 'alegrify-footer__link'
            },
            props.children
        );
    }

    return _react2.default.createElement(
        Link,
        {
            to: props.href,
            title: props.title,
            className: 'alegrify-footer__link'
        },
        props.children
    );
}

Footer.propTypes = {
    /**
     * Children to add on the end of the footer
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * List of links to show in the footer
     */
    links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        title: _propTypes2.default.string.isReauired,
        href: _propTypes2.default.string.isRequired,
        label: _propTypes2.default.string.isRequired
    })),

    /**
     * Logo component
     */
    logo: _propTypes2.default.node
};

exports.default = Footer;