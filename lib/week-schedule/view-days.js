import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_WEEKDAY_LABELS } from './constants.json';

import WeekScheduleViewDay from './view-day';

/**
 * <WeekScheduleViewDays />
 */
function WeekScheduleViewDays(props) {
    return (
        <thead>
            <tr>
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
