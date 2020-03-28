import PropTypes from 'prop-types';

/**
 * Convert an array of variants into a collection of propTypes
 * @param {Array.<String>} variants 
 * @returns {Object}
 */
function variantsToPropTypes(variants) {
    const propTypes = {};

    variants.forEach(variant => {
        propTypes[variant] = PropTypes.bool;
    });

    return propTypes;
}

export default variantsToPropTypes;
