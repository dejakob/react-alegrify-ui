import React from 'react';

const VARIANTS = [
    'left',
    'center',
    'right',

    'top',
    'middle',
    'bottom',
    'outline',
    'even',
    'reverse'
];

/**
 * <Grid />
 * 
 * ```jsx
 * <Grid
 *   reversed
 * >
 *   <Article
 *      className="alegrify-grid--8"
 *   />
 *   <Aside
 *      className="alegrify-grid--4"
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
