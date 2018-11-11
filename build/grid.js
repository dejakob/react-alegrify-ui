'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VARIANTS = ['left', 'center', 'right', 'top', 'middle', 'bottom', 'outline', 'even', 'reverse'];

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
    var classNames = ['alegrify-grid'];

    if (props.className) {
        classNames.push(props.className);
    }

    VARIANTS.forEach(function (variant) {
        if (props[variant]) {
            classNames.push('alegrify-grid--' + variant);
        }
    });

    return _react2.default.createElement(
        'div',
        {
            className: classNames.join(' ')
        },
        props.children
    );
}

Grid.propTypes = {

    /**
     * Content
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string
};
Grid.defaultProps = {};
Grid.propExamples = {};

VARIANTS.forEach(function (variant) {
    Grid.propTypes[variant] = PropTypes.bool;
});