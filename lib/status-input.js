import React from 'react';
import PropTypes from 'prop-types';

/**
 * <StatusInput />
 * @param {Object} props 
 */
function StatusInput(props) {
    const classNames = ['alegrify-status-input'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }
    
    return (
        <div
            className={classNames.join(' ')}
        >
            <textarea
                className="alegrify-status-input__textarea"
                placeholder="How are you feeling?"
                name="alegrify-status-input1"
                id="alegrify-status-input1"
                cols="30"
                rows="3"
            ></textarea>
            <ul
                className="alegrify-status-input__actions"
            >
                <li
                    className="alegrify-status-input__action"
                >
                    <button
                        class="alegrify-status-input__action-button"
                        data-icon="camera_alt"
                    >
                        <span
                            class="alegrify-status-input__action-button-label"
                        >
                            Picture    
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

StatusInput.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

export default StatusInput;
