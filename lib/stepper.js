import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

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

    let currentStep = Math.min(Math.floor(props.progress / 100 * (props.steps.length - 1)), props.steps.length - 1);

    return (
        <div
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
                {props.steps.map((step, index) => (
                    <li
                        key={step}
                        className={`alegrify-stepper__step${index === currentStep ? ' alegrify-stepper__step--active' : ''}`}
                        style={{ width: `${100 / props.steps.length}%` }}
                    >
                        {step}
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