import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_WEEKDAY_LABELS } from './constants.json';

import WeekScheduleViewTime from './view-time';
import WeekScheduleViewEmptyCell from './view-empty-cell';
import { formatTimeLabel } from './helpers';

/**
 * <WeekScheduleViewWeekGridBody />
 */
function WeekScheduleViewWeekGridBody(props) {
    const times = new Array(48)
        .fill(null)
        .map((nothing, index) => formatTimeLabel(index));

    return (
        <tbody>
            {times.map((time, index) =>
                <tr>
                    <WeekScheduleViewTime>
                        {index % props.cellsPerTimeLabel === 0 ? time : ''}
                    </WeekScheduleViewTime>
                    {DEFAULT_WEEKDAY_LABELS.map(() => (
                        <WeekScheduleViewEmptyCell
                            cellHeight={props.cellHeight}
                        />
                    ))}
                </tr>
            )}
        </tbody>
    )
}

WeekScheduleViewWeekGridBody.propTypes = {
    cellsPerTimeLabel: PropTypes.number,
    cellHeight: PropTypes.number
};

export default WeekScheduleViewWeekGridBody;
