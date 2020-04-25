import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

/**
 * <Aside />
 * 
 * Simple HTML aside
 * 
 * Small viewports: full width,
 * 
 * Large viewports: 1/3 width
 * 
 * ```jsx
 * <Aside>
 *  Some extra information on the side
 * </Aside>
 * ```
 */
function Aside(props) {
    const classNames = ['alegrify-aside'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return (
        <aside
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
        >
            {props.children}
        </aside>
    )
}

Aside.propTypes = {

    /**
     * Content of the aside
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
Aside.defaultProps = {
    className: ''
};

export default attachUniversalProps(Aside);
