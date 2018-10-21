import React from 'react';
import PropTypes from 'prop-types';

/**
 * <WeekScheduleViewDay />
 */
function WeekScheduleViewDay(props) {
    return (
        <th
            className="alegrify-week-schedule__day"
        >
            {props.children}
        </th>
    )
}

WeekScheduleViewDay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default WeekScheduleViewDay;
