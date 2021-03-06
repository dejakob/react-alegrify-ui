import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

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
        if (props[variant] === true) {
            classNames.push(`alegrify-grid__cell--${VARIANT_TO_CSS_VARIANT[variant]}`);
        }
        else if (['small', 'medium', 'large'].indexOf(props[variant]) > -1) {
            classNames.push(`alegrify-grid__cell--${VARIANT_TO_CSS_VARIANT[variant]}@${props[variant]}`);
        }
    });

    return (
        <div
            {...applyAdditionalProps(props)}
            className={classNames.join(' ')}
            role="grid-cell"
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

    ...VARIANTS.reduce((accumulated, variant) => {
        return {
            ...accumulated,
            [variant]: PropTypes.oneOfType(
                [ PropTypes.bool, PropTypes.oneOf(['small', 'medium', 'large']) ]
            )
        };
    }, {})
};
GridCell.defaultProps = {};
GridCell.propExamples = {};

export default attachUniversalProps(GridCell);
