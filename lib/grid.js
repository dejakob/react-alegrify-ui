import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

const VARIANTS = [
    'left',
    'center',
    'right',
    'outline',
    'even',

    'top',
    'middle',
    'bottom',
    'stretch',

    'bleed',
    'reverse',
    'all'
];

/**
 * <Grid />
 * 
 * ```jsx
 * <Grid
 *   reversed
 * >
 *   <Article
 *      className="alegrify-grid__cell alegrify-grid__cell--8"
 *   />
 *   <Aside
 *      className="alegrify-grid__cell alegrify-grid__cell--4"
 *   />
 * </Grid>
 * ```
 */
function Grid(props) {
    const classNames = ['alegrify-grid'];

    if (props.className) {
        classNames.push(props.className);
    }

    VARIANTS.forEach(variant => {
        if (props[variant]) {
            classNames.push(`alegrify-grid--${variant}`);
        }
    });

    return (
        <div
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
            role="grid"
        >
            {props.children}
        </div>
    );
}

Grid.propTypes = {

    /**
     * Content
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
     * Align cells left
     */
    left: PropTypes.bool,

    /**
     * Align cells center
     */
    center: PropTypes.bool,

    /**
     * Align cells right
     */
    right: PropTypes.bool,

    /**
     * Align cells on top
     */
    top: PropTypes.bool,

    /**
     * Align cells in the middle (vertically)
     */
    middle: PropTypes.bool,

    /**
     * Align cells at the bottom
     */
    bottom: PropTypes.bool,

    /**
     * Align cells outline
     */
    outline: PropTypes.bool,

    /**
     * Align cells evenly (space-around)
     */
    even: PropTypes.bool,

    /**
     * Reverse the order
     */
    reverse: PropTypes.bool,

    /**
     * Also show grid on smaller screens
     */
    all: PropTypes.bool
};
Grid.defaultProps = {};
Grid.propExamples = {};

export default attachUniversalProps(Grid);
