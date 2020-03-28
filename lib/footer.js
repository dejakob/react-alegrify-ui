import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';


/**
 * ```jsx
 *  <Footer>
 *      <Logo />
 *  </Footer>
 * ```
 */
function Footer(props) {
    return (
        <footer
            className="alegrify-footer"
        >
            {props.children}
        </footer>
    );
}

Footer.propTypes = {
    /**
     * Children to add to the footer
     */
    children: PropTypes.node.isRequired
};
Footer.defaultProps = {};

export default attachUniversalProps(Footer);
