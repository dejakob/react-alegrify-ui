import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Todo: custom translations
const WEEKDAYS = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
];

const SELECTION_PIXEL_VALUES = {
    startOffset: 64,
    cell: 64,
    hour: 128,
    hoursPerCell: 0.5
};

/**
 * <WeekSchedule />
 */
class WeekSchedule extends Component {

    // @Todo test in other timezones
    // @Todo add button to add range

    constructor() {
        super();

        this.handleRangeMouseDown = this.handleRangeMouseDown.bind(this);
        this.handleGenericMouseMove = this.handleGenericMouseMove.bind(this);
        this.handleBodyMouseUp = this.handleBodyMouseUp.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectedRangeIndex: null,
            ranges: this.props.ranges || []
        });
        this.mouseDownOffset = { x: null, y: null };

        if (
            typeof document !== 'undefined' &&
            typeof document.body !== 'undefined' &&
            typeof document.body.addEventListener === 'function'
        ) {
            document.addEventListener('mouseup', this.handleBodyMouseUp);
        }
    }

    componentWillUnmount() {
        if (
            typeof document !== 'undefined' &&
            typeof document.body !== 'undefined' &&
            typeof document.body.removeEventListener === 'function'
        ) {
            document.removeEventListener('mouseup', this.handleBodyMouseUp);
        }
    }

    handleRangeMouseDown(eventData, rangeIndex) {

        //@Todo Caniuse clientX?
        const { clientX, clientY } = eventData;

        eventData.preventDefault();
        eventData.stopPropagation();

        this.setState({
            selectedRangeIndex: rangeIndex
        });
        this.mouseDownOffset = { x: clientX, y: clientY };
    }

    handleGenericMouseMove(eventData) {
        if (typeof this.state.selectedRangeIndex === 'number') {

            //@Todo Caniuse clientX?
            const { clientX, clientY } = eventData;

            const xDiff = clientX - this.mouseDownOffset.x;
            const yDiff = clientY - this.mouseDownOffset.y;

            const moveDownCells = Math.round(yDiff / SELECTION_PIXEL_VALUES.cell);
            const moveRightCells = Math.round(xDiff / SELECTION_PIXEL_VALUES.cell);

            // @Todo resize
            if (moveDownCells !== 0 || moveRightCells !== 0) {
                const updatedRanges = [...this.state.ranges];

                const moveDownHours = moveDownCells * SELECTION_PIXEL_VALUES.hoursPerCell;
                const moveRightDays = moveRightCells;

                updatedRanges[this.state.selectedRangeIndex].from = updatedRanges[this.state.selectedRangeIndex].from + moveDownHours * 3600000;
                updatedRanges[this.state.selectedRangeIndex].till = updatedRanges[this.state.selectedRangeIndex].till + moveDownHours * 3600000;

                // @Todo what about days that are not 86400s
                updatedRanges[this.state.selectedRangeIndex].from = updatedRanges[this.state.selectedRangeIndex].from + moveRightDays * 86400000;
                updatedRanges[this.state.selectedRangeIndex].till = updatedRanges[this.state.selectedRangeIndex].till + moveRightDays * 86400000;

                this.setState({
                    ranges: updatedRanges,
                });

                // @Todo: round at middle of cell
                this.mouseDownOffset = { x: clientX , y: clientY };
                console.log('from', new Date(updatedRanges[this.state.selectedRangeIndex].from).toString());
                console.log('till', new Date(updatedRanges[this.state.selectedRangeIndex].till).toString());
            }

        }
    }

    handleBodyMouseUp() {
        this.setState({ selectedRangeIndex: null });
    }

    render() {
        const methods = {
            onRangeMouseDown: this.handleRangeMouseDown,
            onGenericMouseMove: this.handleGenericMouseMove,
        };

        return WeekScheduleView(Object.assign({}, this.props, this.state, methods));
    }
}

function WeekScheduleView(props) {
    const classNames = ['alegrify-week-schedule'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return (
        <div
            className={classNames.join(' ')}
            onMouseMove={props.onGenericMouseMove}
        >
            <WeekScheduleViewWeekGrid />
            <ul
                className="alegrify-week-schedule__selections"
            >
                {props.ranges.map((range, rangeIndex) =>
                    <WeekScheduleViewRange
                        range={range}
                        onMouseDown={(eventData) => props.onRangeMouseDown(eventData, rangeIndex)}
                    />
                )}
            </ul>
        </div>
    )
}

function WeekScheduleViewWeekGrid(props) {
    return (
        <table
            className="alegrify-week-schedule__table"
        >
            <WeekScheduleViewDays />
            <WeekScheduleViewWeekGridBody />
        </table>
    );
}

function WeekScheduleViewDays(props) {
    return (
        <thead>
            <tr>
                <WeekScheduleViewDay />
                {WEEKDAYS.map(weekDay => (
                    <WeekScheduleViewDay>
                        {weekDay}
                    </WeekScheduleViewDay>
                ))}
            </tr>
        </thead>
    );
}

function WeekScheduleViewDay(props) {
    return (
        <th
            className="alegrify-week-schedule__day"
        >
            {props.children}
        </th>
    )
}

function WeekScheduleViewWeekGridBody(props) {
    const times = new Array(47)
        .fill(null)
        .map((nothing, index) => formatTimeLabel(index));

    return (
        <tbody>
            {times.map(time =>
                <tr>
                    <WeekScheduleViewTime>
                        {time}
                    </WeekScheduleViewTime>
                    {WEEKDAYS.map(() => (
                        <WeekScheduleViewEmptyCell />
                    ))}
                </tr>
            )}
        </tbody>
    )
}

function WeekScheduleViewTime(props) {
    return (
        <th
            className="alegrify-week-schedule__time"
        >
            {props.children}
        </th>
    );
}

function WeekScheduleViewEmptyCell(props) {
    return (
        <td
            className="alegrify-week-schedule__cell"
        ></td>
    );
}

function WeekScheduleViewRange(props) {
    const dateFrom = new Date(props.range.from);
    const hoursFrom = dateFrom.getHours();
    const minutesFrom = dateFrom.getMinutes();

    const offsetTop = hoursFrom * SELECTION_PIXEL_VALUES.hour + minutesFrom / 60 * SELECTION_PIXEL_VALUES.hour - SELECTION_PIXEL_VALUES.cell;

    const dateTill = new Date(props.range.till);
    const hoursTill = dateTill.getHours();
    const minutesTill = dateTill.getMinutes();

    // @Todo: What about cross day ranges?
    const timeDiffInMinutes = (hoursTill * 60 + minutesTill) - (hoursFrom * 60 + minutesFrom);
    const height = (timeDiffInMinutes / 60) * SELECTION_PIXEL_VALUES.hour;

    // @Todo what about days that are not 86400
    const weekDayIndexFrom = (dateFrom.getDay() + 6) % 7;
    const offsetLeft = weekDayIndexFrom * SELECTION_PIXEL_VALUES.cell;
    
    return (
        <li
            className="alegrify-week-schedule__selection"
            style={{ top: `${offsetTop}px`, height: `${height}px`, minHeight: `${height}px`, maxHeight: `${height}px`, left: `${offsetLeft}px` }}
            onMouseDown={props.onMouseDown}
        >
            <div
                className="alegrify-week-schedule__selection-content"
            >
                <button
                    className="alegrify-week-schedule__selection-resize-up"
                ></button>
                <button
                    className="alegrify-week-schedule__selection-resize-down"
                ></button>
            </div>
        </li>
    );
}



// Helpers, pure methods
function formatTimeLabel(index) {
    const hour = formatToXDigits(Math.round(index / 2), 2);
    const min = formatToXDigits((index + 1) % 2 * 30, 2);

    return `${hour}:${min}`;
}

function formatToXDigits(number, digits) {
    let start = '';

    for (let i = 0; i < digits; i++) {
        start += '0';
    }

    return (start + number).substr(-1 * digits, digits);
}

WeekSchedule.propTypes = {
    className: PropTypes.string,
    ranges: PropTypes.arrayOf(
        PropTypes.shape({
            from: PropTypes.number,
            till: PropTypes.number
        })
    )
};
WeekSchedule.propExamples = {
    className: '',
    ranges: [
        { from: 1539795815257, till: 1539803034873 }
    ]
};

export default WeekSchedule;
