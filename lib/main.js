import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

/**
 * <Main />
 * 
 * ```jsx
 * <Main>
 *   Page content...
 * </Main>
 * ```
 */
function Main(props) {
    const classNames = ['alegrify-main'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <main
            className={classNames.join(' ')}
        >
            {props.children}
        </main>
    )
}

Main.propTypes = {

    /**
     * Main content
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string
};
Main.propExamples = {
    children: 'Main content',
    className: ''
}

export default attachUniversalProps(Main);
