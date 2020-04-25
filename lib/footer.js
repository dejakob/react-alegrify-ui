import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';


/**
 * ```jsx
 *  <Footer>
 *      <Logo />
 *  </Footer>
 * ```
 */
function Footer(props) {
    const classNames = ['alegrify-footer'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <footer
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            {props.children}
        </footer>
    );
}

Footer.propTypes = {
    /**
     * Children to add to the footer
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classNames
     */
    className: PropTypes.string,
};
Footer.defaultProps = {};

export default attachUniversalProps(Footer);
