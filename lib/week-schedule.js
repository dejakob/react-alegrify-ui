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
};

/**
 * <WeekSchedule />
 */
class WeekSchedule extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.setState({
            selectedRanges: this.props.selectedRanges || []
        })
    }

    render() {
        return WeekScheduleView(Object.assign({}, this.props, this.state));
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
        >
            <WeekScheduleViewWeekGrid />
            <ul
                className="alegrify-week-schedule__selections"
            >
                {props.selectedRanges.map(selectedRange =>
                    <WeekScheduleViewSelection
                        selectedRange={selectedRange}
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

function WeekScheduleViewSelection(props) {
    console.log('props', props);

    const dateFrom = new Date(props.selectedRange.from);
    const hoursFrom = dateFrom.getHours();
    const minutesFrom = dateFrom.getMinutes();

    console.log('hoursFrom', hoursFrom);
    console.log('minutesFrom', minutesFrom);

    // Double check, almost there...

    const offsetTop = hoursFrom * SELECTION_PIXEL_VALUES.hour + minutesFrom / 60 * SELECTION_PIXEL_VALUES.hour;

    console.log('offsetTop', offsetTop);

    // now height
    
    return (
        <li
            className="alegrify-week-schedule__selection"
            style={{ top: `${offsetTop}px` }}
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
    selectedRanges: PropTypes.arrayOf(
        PropTypes.shape({
            from: PropTypes.number,
            till: PropTypes.number
        })
    )
};
WeekSchedule.propExamples = {
    className: '',
    selectedRanges: [
        { from: 1539795815257, till: 1539803034873 }
    ]
};

export default WeekSchedule;
