import React from 'react';
import PropTypes from 'prop-types';

/**
 * <WeekScheduleViewTime />
 */
function WeekScheduleViewTime(props) {
    return (
        <th
            className="alegrify-week-schedule__time"
        >
            {props.children}
        </th>
    );
}

WeekScheduleViewTime.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default WeekScheduleViewTime;
