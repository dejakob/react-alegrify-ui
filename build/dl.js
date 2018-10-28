'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dd = exports.Dt = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleUiComponent = require('./abstract/simple-ui-component');

var _simpleUiComponent2 = _interopRequireDefault(_simpleUiComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Dl />
 * @param {Object} props 
 */
function Dl(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('dl', null), 'alegrify-dl', props);
}

/**
 * <Dt />
 * @param {Object} props 
 */
function Dt(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('dt', null), 'alegrify-dl__dt', props);
}

/**
 * <Ds />
 * @param {Object} props 
 */
function Dd(props) {
    return (0, _simpleUiComponent2.default)(_react2.default.createElement('dd', null), 'alegrify-dl__dd', props);
}

Dl.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Dt.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;
Dd.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;

exports.default = Dl;
exports.Dt = Dt;
exports.Dd = Dd;