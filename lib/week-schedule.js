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

class WeekSchedule extends Component {
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
        .map((nothing, index) => `${('0' + Math.round(index / 2)).substr(-2,2)}:${('0' + ((index + 1) % 2 * 30)).substr(-2,2)}`);

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

WeekSchedule.propTypes = {
    className: PropTypes.string
};

export default WeekSchedule;
