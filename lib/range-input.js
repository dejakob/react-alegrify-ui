import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

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
    const classNames = ['alegrify-range-input'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <input
            {...applyAdditionalProps(props)}
            type="range"
            id={props.id}
            name={props.name}
            className={classNames.join(' ')}
            disabled={props.disabled}
            onChange={e => props.onValueChange(e.target.value)}
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
    step: 1,
    disabled: false,
    className: ''
};

export default attachUniversalProps(RangeInput);