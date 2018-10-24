import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_WEEKDAY_LABELS } from './constants';

import WeekScheduleViewDay from './view-day';

/**
 * <WeekScheduleViewDays />
 */
function WeekScheduleViewDays(props) {
    return (
        <thead
            className="alegrify-week-schedule__table-head"
        >
            <tr
                className="alegrify-week-schedule__table-row"
            >
                <WeekScheduleViewDay />
                {DEFAULT_WEEKDAY_LABELS.map(weekDay => (
                    <WeekScheduleViewDay>
                        {weekDay}
                    </WeekScheduleViewDay>
                ))}
            </tr>
        </thead>
    );
}

WeekScheduleViewDays.propTypes = {
    weekdayLabels: PropTypes.arrayOf(PropTypes.string)
};
WeekScheduleViewDays.defaultProps = {
    weekdayLabels: DEFAULT_WEEKDAY_LABELS
};

export default WeekScheduleViewDays;
