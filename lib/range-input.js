import React from 'react';
import PropTypes from 'prop-types';
import { wrapWithInputState } from './abstract/input-with-state';
import { attachUniversalProps } from './helpers/universal-props';

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
    return wrapWithInputState(RangeInputView)(props);
}

function RangeInputView(props) {
    const classNames = ['alegrify-range-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <input
            type="range"
            id={props.id}
            name={props.name}
            className={classNames.join(' ')}
            disabled={props.disabled}
            onChange={e => props.changeValue(e.target.value)}
            value={props.value}
            data-low-indicator={props.lowIndicator}
            data-high-indicator={props.highIndicator}
            min={props.min || 1}
            max={props.max || 10}
            step={props.step || 1}
        />
    );
}

RangeInput.propTypes = {

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Input id
     */
    id: PropTypes.string.isRequired,

    /**
     * Input name
     */
    name: PropTypes.string.isRequired,

    /**
     * Input value
     */
    value: PropTypes.number,

    /**
     * Is range input disabled?
     */
    disabled: PropTypes.bool,

    /**
     * Indicator at the start of the range input
     */
    lowIndicator: PropTypes.string,

    /**
     * Indicator at the end of the range input
     */
    highIndicator: PropTypes.string,

    /**
     * Start of the range
     */
    min: PropTypes.number,

    /**
     * End of the range
     */
    max: PropTypes.number,

    /**
     * Range step
     */
    step: PropTypes.number,

    /**
     * On value change, param: number
     */
    onValueChange: PropTypes.func
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

export default attachUniversalProps(RangeInput);