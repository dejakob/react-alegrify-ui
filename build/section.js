'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleUiComponent = require('./abstract/simple-ui-component');

var _simpleUiComponent2 = _interopRequireDefault(_simpleUiComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Section />
 */
function Section(props) {
  return (0, _simpleUiComponent2.default)(_react2.default.createElement('section', null), 'alegrify-section', props);
}

Section.propTypes = _simpleUiComponent.SimpleUiComponentPropTypes;

exports.default = Section;