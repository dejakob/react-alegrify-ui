import React from 'react';
import PropTypes from 'prop-types';

import WeekScheduleViewWeekGrid from './view-week-grid';
import WeekScheduleViewRange from './view-range';

/**
 * <WeekScheduleView />
 */
function WeekScheduleView(props) {
    const classNames = ['alegrify-week-schedule'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return (
        <div
            className={classNames.join(' ')}
            onMouseMove={props.onGenericMouseMove}
            onTouchMove={props.onGenericMouseMove}
        >
            <WeekScheduleViewWeekGrid
                tableRef={props.tableRef}
                onDoubleClick={props.onDoubleClick}
                cellHeight={props.cellHeight}
                hoursPerCell={props.hoursPerCell}
                cellsPerTimeLabel={props.cellsPerTimeLabel}
            />
            <ul
                className="alegrify-week-schedule__selections"
            >
                {props.ranges.map((range, rangeIndex) =>
                    <WeekScheduleViewRange
                        range={range}
                        onMouseDown={(eventData, options = {}) => props.onRangeMouseDown(eventData, rangeIndex, options)}
                        cellHeight={props.cellHeight}
                        hoursPerCell={props.hoursPerCell}
                    />
                )}
            </ul>
        </div>
    )
}

WeekScheduleView.propTypes = {
    onGenericMouseMove: PropTypes.func,
    onDoubleClick: PropTypes.func,
    tableRef: PropTypes.func,
    cellHeight: PropTypes.number,
    hoursPerCell: PropTypes.number,
    cellsPerTimeLabel: PropTypes.number,
    ranges: PropTypes.arrayOf(
        PropTypes.shape({
            from: PropTypes.number,
            till: PropTypes.number
        })
    )
};

export default WeekScheduleView;