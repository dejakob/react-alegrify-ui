import React, { Component } from 'react';
import moment from 'moment';
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

const CELL_WIDTH = 64;

// @Todo multitouch resize

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
        this.handleTableClick = this.handleTableClick.bind(this);
    }

    getDefaultProps() {
        return WeekSchedule.defaultProps;
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

    handleRangeMouseDown(eventData, rangeIndex, options = {}) {
        eventData.preventDefault();
        eventData.stopPropagation();

        //@Todo Caniuse clientX?
        const { clientX, clientY } = eventData;

        this.setState({
            selectedRangeIndex: rangeIndex
        });
        this.mouseDownOffset = { x: clientX, y: clientY };
        this.gridBoundaries = this.tableRef.getBoundingClientRect();
        this.resizeMode = options.resize;
    }

    handleGenericMouseMove(eventData) {
        if (typeof this.state.selectedRangeIndex === 'number') {

            //@Todo Caniuse clientX?
            const { clientX, clientY } = eventData;

            const xDiff = clientX - this.gridBoundaries.left;
            const yDiff = clientY - this.gridBoundaries.top;

            const moveDownCells = Math.round(yDiff / this.props.cellHeight);
            const moveRightCells = Math.floor(xDiff / CELL_WIDTH);

            // @Todo resize
            if (moveDownCells !== 0 || moveRightCells !== 0) {
                const updatedRanges = [...this.state.ranges];

                const newHourValue  = moveDownCells * this.props.hoursPerCell;
                const newWeekDayValue = moveRightCells;

                const fromMoment = moment(updatedRanges[this.state.selectedRangeIndex].from);
                const tillMoment = moment(updatedRanges[this.state.selectedRangeIndex].till);

                const startOfDay = fromMoment.clone().startOf('day').toDate().getTime();
                const endOfDay = fromMoment.clone().endOf('day').toDate().getTime();


                updatedRanges[this.state.selectedRangeIndex].from = fromMoment.isoWeekday(newWeekDayValue).toDate().getTime();
                updatedRanges[this.state.selectedRangeIndex].till = tillMoment.isoWeekday(newWeekDayValue).toDate().getTime(); 

                if (this.resizeMode === 'TOP') {
                    updatedRanges[this.state.selectedRangeIndex].from = fromMoment.hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).toDate().getTime();
                }

                if (this.resizeMode === 'BOTTOM') {
                    updatedRanges[this.state.selectedRangeIndex].till = tillMoment.hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).toDate().getTime();
                }

                if (!this.resizeMode) {
                    // @Todo what about days that are not 86400s
                    const length = updatedRanges[this.state.selectedRangeIndex].till - updatedRanges[this.state.selectedRangeIndex].from;
                    updatedRanges[this.state.selectedRangeIndex].from = fromMoment
                        .hour(newHourValue)
                        .minute((newHourValue - Math.floor(newHourValue)) * 60)
                        .subtract(length / 2000, 's')
                        .toDate()
                        .getTime();

                    updatedRanges[this.state.selectedRangeIndex].till = fromMoment.add(length / 1000, 's').toDate().getTime();
                }

                const fromTime = updatedRanges[this.state.selectedRangeIndex].from;
                const tillTime = updatedRanges[this.state.selectedRangeIndex].till;


                if (
                    tillTime < fromTime ||
                    fromTime < startOfDay && moveRightCells === 0 ||
                    tillTime > endOfDay && moveRightCells === 0
                ) {
                    updatedRanges.splice(this.state.selectedRangeIndex, 1);

                    return this.setState({
                        ranges: updatedRanges,
                        selectedRangeIndex: null
                    });
                }
                
                this.setState({
                    ranges: updatedRanges,
                });

                // @Todo: round at middle of cell
                this.mouseDownOffset = { x: clientX , y: clientY };
            }

        }
    }

    handleBodyMouseUp() {
        this.setState({ selectedRangeIndex: null });
    }

    handleTableClick(eventData) {
        eventData.preventDefault();
        eventData.stopPropagation();

        if (eventData.target.localName === 'td') {
            this.gridBoundaries = this.tableRef.getBoundingClientRect();

            const { clientX, clientY } = eventData;

            // @Todo: test RTL
            const xDiff = clientX - this.gridBoundaries.left;
            const yDiff = clientY - this.gridBoundaries.top;

            const moveDownCells = Math.floor(yDiff / this.props.cellHeight);
            const moveRightCells = Math.floor(xDiff / CELL_WIDTH);
            const newWeekDayValue = moveRightCells;

            const newHourValue  = moveDownCells * this.props.hoursPerCell;

            var fromMoment = moment(this.state.ranges.length ? this.state.ranges[0].from : Date.now());

            const newRange = {
                from: fromMoment
                    .isoWeekday(newWeekDayValue)
                    .hour(newHourValue)
                    .minute((newHourValue - Math.floor(newHourValue)) * 60)
                    .toDate()
                    .getTime(),
                till: fromMoment.add(3, 'hour').toDate().getTime()
            };

            this.setState({
                ranges: [...this.state.ranges, newRange],
            });
        }
    }

    render() {
        const methods = {
            onRangeMouseDown: this.handleRangeMouseDown,
            onGenericMouseMove: this.handleGenericMouseMove,
            onDoubleClick: this.handleTableClick,
            tableRef: (table) => this.tableRef = table
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

function WeekScheduleViewWeekGrid(props) {
    return (
        <table
            className="alegrify-week-schedule__table"
            onDoubleClick={props.onDoubleClick}
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
                    {WEEKDAYS.map(() => (
                        <WeekScheduleViewEmptyCell
                            cellHeight={props.cellHeight}
                        />
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
            style={heightCss(props.cellHeight)}
        ></td>
    );
}

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
    const offsetLeft = weekDayIndexFrom * CELL_WIDTH;

    const style = heightCss(height);
    style.top = `${offsetTop}px`;
    style.left = `${offsetLeft}px`;
    
    return (
        <li
            className="alegrify-week-schedule__selection"
            style={style}
            onMouseDown={props.onMouseDown}
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



// Helpers, pure methods
function formatTimeLabel(index) {
    const hour = formatToXDigits(Math.floor(index / 2), 2);
    const min = formatToXDigits(index % 2 * 30, 2);

    return `${hour}:${min}`;
}

function formatToXDigits(number, digits) {
    let start = '';

    for (let i = 0; i < digits; i++) {
        start += '0';
    }

    return (start + number).substr(-1 * digits, digits);
}

function calculateOffsetTop(hours, minutes, hourHeight) {
    return hours * hourHeight + minutes / 60 * hourHeight - hourHeight;
}

function heightCss(height) {
    return {
        height: `${height}px`,
        minHeight: `${height}px`,
        maxHeight: `${height}px`
    };
}

WeekSchedule.propTypes = {
    className: PropTypes.string,
    ranges: PropTypes.arrayOf(
        PropTypes.shape({
            from: PropTypes.number,
            till: PropTypes.number
        })
    ),
    cellHeight: PropTypes.number,
    hoursPerCell: PropTypes.number,
    cellsPerTimeLabel: PropTypes.number
};
WeekSchedule.defaultProps = {
    cellHeight: 16,
    hoursPerCell: 0.5,
    cellsPerTimeLabel: 4
};
WeekSchedule.propExamples = {
    className: '',
    ranges: [
        { from: 1539795815257, till: 1539803034873 }
    ],
    cellHeight: 16,
    hoursPerCell: 0.5,
    cellsPerTimeLabel: 4
};

export default WeekSchedule;
