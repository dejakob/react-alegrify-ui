'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var classNames = ['alegrify-aside'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'aside',
        {
            className: classNames.join(' ')
        },
        props.children
    );
}

Aside.propTypes = {

    /**
     * Content of the aside
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string
};
Aside.propExamples = {
    children: 'Aside content'
};

exports.default = Aside;