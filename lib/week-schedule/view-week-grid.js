import React from 'react';
import PropTypes from 'prop-types';

import WeekScheduleViewDays from './view-days';
import WeekScheduleViewWeekGridBody from './view-week-grid-body';

/**
 * <WeekScheduleViewWeekGrid />
 */
function WeekScheduleViewWeekGrid(props) {
    return (
        <table
            className="alegrify-week-schedule__table"
            onDoubleClick={props.onDoubleClick}
            onTouchStart={props.onDoubleClick}
            ref={props.tableRef}
        >
            <WeekScheduleViewDays />
            <WeekScheduleViewWeekGridBody
                cellsPerTimeLabel={props.cellsPerTimeLabel}
                cellHeight={props.cellHeight}
            />
        </table>
    );
}

WeekScheduleViewWeekGrid.propTypes = {
    onDoubleClick: PropTypes.func,
    cellsPerTimeLabel: PropTypes.number,
    cellHeight: PropTypes.number,
    tableRef: PropTypes.func
};

export default WeekScheduleViewWeekGrid;
