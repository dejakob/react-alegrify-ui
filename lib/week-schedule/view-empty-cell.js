import React from 'react';

import { heightCss } from './helpers';

/**
 * <WeekScheduleViewEmptyCell />
 */
function WeekScheduleViewEmptyCell(props) {
    return (
        <td
            className="alegrify-week-schedule__cell"
            style={heightCss(props.cellHeight)}
        ></td>
    );
}

WeekScheduleViewEmptyCell.propTypes = {};

export default WeekScheduleViewEmptyCell;
