import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

/**
 * <DateIndicator />
 * 
 * ```jsx
 * <DateIndicator
 *   date={'2018-10-28T00:00:00'}
 * />
 * ```
 */
function DateIndicator(props) {
    const classNames = ['alegrify-date-indicator'];

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    const momentDate = moment(props.date);

    return (
        <time
            className={classNames.join(' ')}
            datetime={momentDate.format()}
        >
            <span
                className="alegrify-date-indicator__month"
            >
                {momentDate.format('MMM')}
            </span>
            <span
                className="alegrify-date-indicator__day"
            >
                {momentDate.format('D')}
            </span>
        </time>
    );
}

DateIndicator.propTypes = {

    /**
     * Content
     */
    date: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string
}
DateIndicator.defaultProps = {
    date: new Date().toString(),
    className: ''
}
DateIndicator.propExamples = DateIndicator.defaultProps;

export default DateIndicator;
