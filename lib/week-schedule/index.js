/*

    TODOS
    =============

    * Multitouch resize gesture
    * Test in other timezones
    * Button to add range
    * Caniuse clientX/clientY?
    * what about days that are not 86400s
    * Test RTL

*/

import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import WeekScheduleView from './view';

import {
    DEFAULT_CELL_HEIGHT,
    DEFAULT_CELL_WIDTH,
    DEFAULT_HOURS_PER_CELL,
    DEFAULT_CELLS_PER_TIME_LABEL
} from './constants.json';
import { getCursorOrTouchPosition } from './helpers';


class WeekSchedule extends Component {
    constructor() {
        super();

        this.handleRangeMouseDown = this.handleRangeMouseDown.bind(this);
        this.handleGenericMouseMove = this.handleGenericMouseMove.bind(this);
        this.handleBodyMouseUp = this.handleBodyMouseUp.bind(this);
        this.handleTableClick = this.handleTableClick.bind(this);
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
            document.addEventListener('touchend', this.handleBodyMouseUp);
        }
    }

    componentWillUnmount() {
        if (
            typeof document !== 'undefined' &&
            typeof document.body !== 'undefined' &&
            typeof document.body.removeEventListener === 'function'
        ) {
            document.removeEventListener('mouseup', this.handleBodyMouseUp);
            document.addEventListener('touchend', this.handleBodyMouseUp);
        }
    }

    handleRangeMouseDown(eventData, rangeIndex, options = {}) {
        eventData.preventDefault();
        eventData.stopPropagation();

        // Avoid issues on multitouch
        if (!this.state.selectedRangeIndex) {
            const { clientX, clientY } = getCursorOrTouchPosition(eventData);

            this.setState({
                selectedRangeIndex: rangeIndex
            });
            this.mouseDownOffset = { x: clientX, y: clientY };
            this.gridBoundaries = this.tableRef.getBoundingClientRect();
            this.resizeMode = options.resize;

            if (eventData.touches && eventData.touches.length === 2) {
                this.touchDistanceY = Math.abs(eventData.touches[1].clientY - eventData.touches[0].clientY);
            }
        }
    }

    handleGenericMouseMove(eventData) {
        if (typeof this.state.selectedRangeIndex === 'number') {
            eventData.preventDefault();
            eventData.stopPropagation();

            const { clientX, clientY } = getCursorOrTouchPosition(eventData);

            const xDiff = clientX - this.gridBoundaries.left;
            const yDiff = clientY - this.gridBoundaries.top;

            const moveDownCells = Math.round(yDiff / this.props.cellHeight);
            const moveRightCells = Math.floor(xDiff / DEFAULT_CELL_WIDTH);

            if (eventData.touches && eventData.touches.length === 2) {
                const newTouchDistanceY = Math.abs(eventData.touches[1].clientY - eventData.touches[0].clientY);

                if (this.touchDistanceY) {
                    const updatedRanges = [...this.state.ranges];
                    const increaseFactor = newTouchDistanceY / this.touchDistanceY;

                    const fromMoment = moment(updatedRanges[this.state.selectedRangeIndex].from);
                    const tillMoment = moment(updatedRanges[this.state.selectedRangeIndex].till);

                    const additionInMinutes = fromMoment.hour() * increaseFactor * 60;

                    updatedRanges[this.state.selectedRangeIndex].from = fromMoment.subtract(additionInMinutes / 2, 'minute').toDate().getTime();
                    updatedRanges[this.state.selectedRangeIndex].till = tillMoment.add(additionInMinutes / 2, 'minute').toDate().getTime();

                    this.setState({
                        ranges: updatedRanges,
                    });
                }

                this.touchDistanceY = newTouchDistanceY;
            }
            else if (moveDownCells !== 0 || moveRightCells !== 0) {
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

            const { clientX, clientY } = getCursorOrTouchPosition(eventData);

            const xDiff = clientX - this.gridBoundaries.left;
            const yDiff = clientY - this.gridBoundaries.top;

            const moveDownCells = Math.floor(yDiff / this.props.cellHeight);
            const moveRightCells = Math.floor(xDiff / DEFAULT_CELL_WIDTH);
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
    cellHeight: DEFAULT_CELL_HEIGHT,
    hoursPerCell: DEFAULT_HOURS_PER_CELL,
    cellsPerTimeLabel: DEFAULT_CELLS_PER_TIME_LABEL
};
WeekSchedule.propExamples = {
    className: '',
    ranges: [
        {
            from: new Date('2018-10-20T08:00:00').getTime(),
            till: new Date('2018-10-20T17:00:00').getTime()
        }
    ],
    cellHeight: DEFAULT_CELL_HEIGHT,
    hoursPerCell: DEFAULT_HOURS_PER_CELL,
    cellsPerTimeLabel: DEFAULT_CELLS_PER_TIME_LABEL
};

export default WeekSchedule;
