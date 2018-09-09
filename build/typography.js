'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Strong = exports.Em = exports.P = exports.H3 = exports.H2 = exports.H1 = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleUiComponent = require('./abstract/simple-ui-component');

var _simpleUiComponent2 = _interopRequireDefault(_simpleUiComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <H1 />
 * @param {Object} props 
 */
function H1(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('h1', null), 'alegrify-h1', props);
}

/**
 * <H2 />
 * @param {Object} props 
 */
function H2(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('h2', null), 'alegrify-h2', props);
}

/**
 * <H3 />
 * @param {Object} props 
 */
function H3(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('h3', null), 'alegrify-h3', props);
}

/**
 * <P />
 * @param {Object} props 
 */
function P(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('p', null), 'alegrify-p', props);
}

/**
 * <Em />
 * @param {Object} props 
 */
function Em(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('em', null), 'alegrify-em', props);
}

/**
 * <Strong />
 * @param {Object} props 
 */
function Strong(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('strong', null), 'alegrify-strong', props);
}

H1.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
H2.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
H3.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
P.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Em.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Strong.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;

exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.P = P;
exports.Em = Em;
exports.Strong = Strong;