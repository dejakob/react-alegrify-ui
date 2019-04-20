import React from 'react';
import Grid from './grid';
import PropTypes from 'prop-types';

let reactRouterDom;

try {
    reactRouterDom = require('react-router-dom');
}
catch (ex) {}

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
    return (
        <footer
            className="alegrify-footer"
        >
            <div
                className="alegrify-footer__content"
            >
                <Grid
                    all
                    outline
                    middle
                >
                    <nav
                        className="alegrify-footer__nav alegrify-grid__cell--4"
                    >
                        <ul
                            className="alegrify-footer__nav-list"
                        >
                            {props.links.map((link, index) => (
                                <li
                                    key={index}
                                    className="alegrify-footer__nav-list-item"
                                >
                                    <FooterLink
                                        href={link.href}
                                        title={link.title}
                                    >
                                        {link.label}
                                    </FooterLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div
                        className="alegrify-grid__cell--4 alegrify-footer__logo"
                    >
                        {props.logo}
                    </div>
                    <div
                        className="alegrify-grid__cell--4 alegrify-footer__trademark"
                    >
                        {props.children}
                    </div>
                </Grid>
            </div>
        </footer>
    );
}

function FooterLink(props) {
    const EXTERNAL_LINK_START = [
        'http://',
        'https://',
        '//'
    ];

    const isExternalLink = typeof props.href === 'string' &&
        EXTERNAL_LINK_START.some(linkStart =>
            props.href.indexOf(linkStart) === 0
        );

    if (isExternalLink || !reactRouterDom) {
        return (
            <a
                href={props.href}
                title={props.title}
                className="alegrify-footer__link"
            >
                {props.children}
            </a>
        );
    }

    let Link;
    
    if (reactRouterDom) {
        Link = reactRouterDom.Link;
    }

    return (
        <Link
            to={props.href}
            title={props.title}
            className="alegrify-footer__link"
        >
            {props.children}
        </Link>
    );
}

Footer.propTypes = {
    /**
     * Children to add on the end of the footer
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * List of links to show in the footer
     */
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isReauired,
            href: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ),

    /**
     * Logo component
     */
    logo: PropTypes.node
};

export default Footer;
