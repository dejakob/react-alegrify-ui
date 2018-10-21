import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_CELL_WIDTH } from './constants.json';
import { calculateOffsetTop, heightCss } from './helpers';

/**
 * <WeekScheduleViewRange />
 */
function WeekScheduleViewRange(props) {
    const hourHeight = props.cellHeight / props.hoursPerCell;

    const dateFrom = new Date(props.range.from);
    const hoursFrom = dateFrom.getHours();
    const minutesFrom = dateFrom.getMinutes();

    const offsetTop = calculateOffsetTop(hoursFrom, minutesFrom, hourHeight);

    const dateTill = new Date(props.range.till);
    const hoursTill = dateTill.getHours();
    const minutesTill = dateTill.getMinutes();

    // @Todo: What about cross day ranges?
    const timeDiffInMinutes = (hoursTill * 60 + minutesTill) - (hoursFrom * 60 + minutesFrom);
    const height = (timeDiffInMinutes / 60) * hourHeight;

    // @Todo what about days that are not 86400
    const weekDayIndexFrom = (dateFrom.getDay() + 6) % 7;
    const offsetLeft = weekDayIndexFrom * DEFAULT_CELL_WIDTH;

    const style = heightCss(height);
    style.top = `${offsetTop}px`;
    style.left = `${offsetLeft}px`;
    
    return (
        <li
            className="alegrify-week-schedule__selection"
            style={style}
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onMouseDown}
        >
            <div
                className="alegrify-week-schedule__selection-content"
            >
                <button
                    className="alegrify-week-schedule__selection-resize-up"
                    onMouseDown={(e) => props.onMouseDown(e, { resize: 'TOP' })}
                ></button>
                <button
                    className="alegrify-week-schedule__selection-resize-down"
                    onMouseDown={(e) => props.onMouseDown(e, { resize: 'BOTTOM' })}
                ></button>
            </div>
        </li>
    );
}

WeekScheduleViewRange.propTypes = {
    onMouseDown: PropTypes.func,
    cellHeight: PropTypes.number,
    hoursPerCell: PropTypes.number,
    range: PropTypes.object
};

export default WeekScheduleViewRange;
