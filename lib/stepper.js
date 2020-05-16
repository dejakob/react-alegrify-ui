import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps, applyAdditionalProps } from './helpers/universal-props';

const PROGRESS_MIN = 0;
const PROGRESS_MAX = 100;

/**
 * <Stepper />
 * 
 * ```jsx
 * <Stepper
 *   progress={50}
 *   steps={['step 1', 'step 2']}
 * />
 * ```
 */
function Stepper(props) {
    const classNames = ['alegrify-stepper'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <div
            {...applyAdditionalProps(props)}
            className="alegrify-stepper"
        >
            <progress
                className="alegrify-stepper__progress"
                min={PROGRESS_MIN}
                max={PROGRESS_MAX}
                value={props.progress}
            />
            <ol
                className="alegrify-stepper__steps"
            >
                {props.steps.map((step) => (
                    <li
                        key={step}
                        className="alegrify-stepper__step"
                        style={{ width: `${100 / props.steps.length}%` }}
                    >
                        <span
                            class="alegrify-stepper__step-label"
                        >
                            {step}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
Stepper.propTypes = {

    /**
     * Progress (value 0 - 100)
     */
    progress: PropTypes.number,

    /**
     * Steps (strings)
     */
    steps: PropTypes.arrayOf(PropTypes.string)
};

export default attachUniversalProps(Stepper);