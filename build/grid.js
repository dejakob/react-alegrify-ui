'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VARIANTS = ['left', 'center', 'right', 'top', 'middle', 'bottom', 'outline', 'even', 'reverse', 'all'];

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
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string
};
Grid.defaultProps = {};
Grid.propExamples = {};

VARIANTS.forEach(function (variant) {
    Grid.propTypes[variant] = _propTypes2.default.bool;
});

exports.default = Grid;