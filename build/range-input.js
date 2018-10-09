'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inputWithState = require('./abstract/input-with-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <RangeInput />
 * 
 * ```jsx
 * <RangeInput
 *   id="my_range_input"
 *   name="my_range_input"
 *   min={1}
 *   max={10}
 *   value={6}
 * />
 * ```
 */
function RangeInput(props) {
  var classNames = ['alegrify-range-input'];

  if (props.className) {
    classNames.push(props.className);
  }

  return _react2.default.createElement('input', {
    type: 'range',
    id: props.id,
    name: props.name,
    className: classNames.join(' '),
    disabled: props.disabled,
    onChange: function onChange(e) {
      return props.changeValue(e.target.value);
    },
    value: props.value,
    'data-low-indicator': props.lowIndicator,
    'data-high-indicator': props.highIndicator,
    min: props.min || 1,
    max: props.max || 10,
    step: props.step || 1
  });
}

RangeInput.propTypes = {

  /**
   * Additional classnames
   */
  className: _propTypes2.default.string,

  /**
   * Input id
   */
  id: _propTypes2.default.string.isRequired,

  /**
   * Input name
   */
  name: _propTypes2.default.string.isRequired,

  /**
   * Input value
   */
  value: _propTypes2.default.number,

  /**
   * Is range input disabled?
   */
  disabled: _propTypes2.default.bool,

  /**
   * Indicator at the start of the range input
   */
  lowIndicator: _propTypes2.default.string,

  /**
   * Indicator at the end of the range input
   */
  highIndicator: _propTypes2.default.string,

  /**
   * Start of the range
   */
  min: _propTypes2.default.number,

  /**
   * End of the range
   */
  max: _propTypes2.default.number,

  /**
   * Range step
   */
  step: _propTypes2.default.number,

  /**
   * On value change, param: number
   */
  onValueChange: _propTypes2.default.func
};
RangeInput.defaultProps = {
  min: 1,
  max: 10,
  step: 1
};
RangeInput.propExamples = {
  className: '',
  id: 'rangeinput',
  name: 'rangeinput',
  value: 8,
  disabled: false,
  lowIndicator: '😥',
  highIndicator: '😍',
  min: 1,
  max: 10,
  step: 1
};

exports.default = (0, _inputWithState.wrapWithInputState)(RangeInput);