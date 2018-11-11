import React from 'react';
import PropTypes from 'prop-types';

const VARIANTS = [
    'left',
    'center',
    'right',

    'top',
    'middle',
    'bottom',
    'outline',
    'even',
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
            className={classNames.join(' ')}
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
};
Grid.defaultProps = {};
Grid.propExamples = {};

VARIANTS.forEach(variant => {
    Grid.propTypes[variant] = PropTypes.bool
});

export default Grid;
