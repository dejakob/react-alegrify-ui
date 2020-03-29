import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

const VARIANTS = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
];
const VARIANT_TO_CSS_VARIANT = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11
};

/**
 * <GridCell />
 * 
 * ```jsx
 * <GridCell
 *   three
 * >
 *   content...
 * </GridCell>
 * ```
 */
function GridCell(props) {
    const classNames = ['alegrify-grid__cell'];

    if (props.className) {
        classNames.push(props.className);
    }

    VARIANTS.forEach(variant => {
        if (props[variant]) {
            classNames.push(`alegrify-grid__cell--${VARIANT_TO_CSS_VARIANT[variant]}`);
        }
    });

    return (
        <div
            className={classNames.join(' ')}
            aria-role="grid-cell"
        >
            {props.children}
        </div>
    );
}

GridCell.propTypes = {

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

    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
    four: PropTypes.bool,
    five: PropTypes.bool,
    six: PropTypes.bool,
    seven: PropTypes.bool,
    eight: PropTypes.bool,
    nine: PropTypes.bool,
    ten: PropTypes.bool,
    eleven: PropTypes.bool
};
GridCell.defaultProps = {};
GridCell.propExamples = {};

export default attachUniversalProps(GridCell);
