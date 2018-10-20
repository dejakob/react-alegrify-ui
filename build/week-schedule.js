'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Todo: custom translations
var WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

var CELL_WIDTH = 64;

// @Todo multitouch resize

/**
 * <WeekSchedule />
 */

var WeekSchedule = function (_Component) {
    _inherits(WeekSchedule, _Component);

    // @Todo test in other timezones
    // @Todo add button to add range

    function WeekSchedule() {
        _classCallCheck(this, WeekSchedule);

        var _this = _possibleConstructorReturn(this, (WeekSchedule.__proto__ || Object.getPrototypeOf(WeekSchedule)).call(this));

        _this.handleRangeMouseDown = _this.handleRangeMouseDown.bind(_this);
        _this.handleGenericMouseMove = _this.handleGenericMouseMove.bind(_this);
        _this.handleBodyMouseUp = _this.handleBodyMouseUp.bind(_this);
        _this.handleTableClick = _this.handleTableClick.bind(_this);
        return _this;
    }

    _createClass(WeekSchedule, [{
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return WeekSchedule.defaultProps;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                selectedRangeIndex: null,
                ranges: this.props.ranges || []
            });
            this.mouseDownOffset = { x: null, y: null };

            if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.addEventListener === 'function') {
                document.addEventListener('mouseup', this.handleBodyMouseUp);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.removeEventListener === 'function') {
                document.removeEventListener('mouseup', this.handleBodyMouseUp);
            }
        }
    }, {
        key: 'handleRangeMouseDown',
        value: function handleRangeMouseDown(eventData, rangeIndex) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            eventData.preventDefault();
            eventData.stopPropagation();

            //@Todo Caniuse clientX?
            var clientX = eventData.clientX,
                clientY = eventData.clientY;


            this.setState({
                selectedRangeIndex: rangeIndex
            });
            this.mouseDownOffset = { x: clientX, y: clientY };
            this.gridBoundaries = this.tableRef.getBoundingClientRect();
            this.resizeMode = options.resize;
        }
    }, {
        key: 'handleGenericMouseMove',
        value: function handleGenericMouseMove(eventData) {
            if (typeof this.state.selectedRangeIndex === 'number') {

                //@Todo Caniuse clientX?
                var clientX = eventData.clientX,
                    clientY = eventData.clientY;


                var xDiff = clientX - this.gridBoundaries.left;
                var yDiff = clientY - this.gridBoundaries.top;

                var moveDownCells = Math.round(yDiff / this.props.cellHeight);
                var moveRightCells = Math.floor(xDiff / CELL_WIDTH);

                // @Todo resize
                if (moveDownCells !== 0 || moveRightCells !== 0) {
                    var updatedRanges = [].concat(_toConsumableArray(this.state.ranges));

                    var newHourValue = moveDownCells * this.props.hoursPerCell;
                    var newWeekDayValue = moveRightCells;

                    var fromMoment = (0, _moment2.default)(updatedRanges[this.state.selectedRangeIndex].from);
                    var tillMoment = (0, _moment2.default)(updatedRanges[this.state.selectedRangeIndex].till);

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
                        var length = updatedRanges[this.state.selectedRangeIndex].till - updatedRanges[this.state.selectedRangeIndex].from;
                        updatedRanges[this.state.selectedRangeIndex].from = fromMoment.hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).subtract(length / 2000, 's').toDate().getTime();

                        updatedRanges[this.state.selectedRangeIndex].till = fromMoment.add(length / 1000, 's').toDate().getTime();
                    }

                    var MIN_SIZE_IN_HOUR = 1;

                    if (updatedRanges[this.state.selectedRangeIndex].till - updatedRanges[this.state.selectedRangeIndex].from >= MIN_SIZE_IN_HOUR * 3600000) {
                        this.setState({
                            ranges: updatedRanges
                        });
                    }

                    // @Todo: round at middle of cell
                    this.mouseDownOffset = { x: clientX, y: clientY };
                }
            }
        }
    }, {
        key: 'handleBodyMouseUp',
        value: function handleBodyMouseUp() {
            this.setState({ selectedRangeIndex: null });
        }
    }, {
        key: 'handleTableClick',
        value: function handleTableClick(eventData) {
            eventData.preventDefault();
            eventData.stopPropagation();

            if (eventData.target.localName === 'td') {
                this.gridBoundaries = this.tableRef.getBoundingClientRect();

                var clientX = eventData.clientX,
                    clientY = eventData.clientY;

                // @Todo: test RTL

                var xDiff = clientX - this.gridBoundaries.left;
                var yDiff = clientY - this.gridBoundaries.top;

                var moveDownCells = Math.floor(yDiff / this.props.cellHeight);
                var moveRightCells = Math.floor(xDiff / CELL_WIDTH);
                var newWeekDayValue = moveRightCells;

                var newHourValue = moveDownCells * this.props.hoursPerCell;

                var fromMoment = (0, _moment2.default)(this.state.ranges.length ? this.state.ranges[0].from : Date.now());

                var newRange = {
                    from: fromMoment.isoWeekday(newWeekDayValue).hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).toDate().getTime(),
                    till: fromMoment.add(3, 'hour').toDate().getTime()
                };

                this.setState({
                    ranges: [].concat(_toConsumableArray(this.state.ranges), [newRange])
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var methods = {
                onRangeMouseDown: this.handleRangeMouseDown,
                onGenericMouseMove: this.handleGenericMouseMove,
                onDoubleClick: this.handleTableClick,
                tableRef: function tableRef(table) {
                    return _this2.tableRef = table;
                }
            };

            return WeekScheduleView(Object.assign({}, this.props, this.state, methods));
        }
    }]);

    return WeekSchedule;
}(_react.Component);

function WeekScheduleView(props) {
    var classNames = ['alegrify-week-schedule'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'div',
        {
            className: classNames.join(' '),
            onMouseMove: props.onGenericMouseMove
        },
        _react2.default.createElement(WeekScheduleViewWeekGrid, {
            tableRef: props.tableRef,
            onDoubleClick: props.onDoubleClick,
            cellHeight: props.cellHeight,
            hoursPerCell: props.hoursPerCell,
            cellsPerTimeLabel: props.cellsPerTimeLabel
        }),
        _react2.default.createElement(
            'ul',
            {
                className: 'alegrify-week-schedule__selections'
            },
            props.ranges.map(function (range, rangeIndex) {
                return _react2.default.createElement(WeekScheduleViewRange, {
                    range: range,
                    onMouseDown: function onMouseDown(eventData) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        return props.onRangeMouseDown(eventData, rangeIndex, options);
                    },
                    cellHeight: props.cellHeight,
                    hoursPerCell: props.hoursPerCell
                });
            })
        )
    );
}

function WeekScheduleViewWeekGrid(props) {
    return _react2.default.createElement(
        'table',
        {
            className: 'alegrify-week-schedule__table',
            onDoubleClick: props.onDoubleClick,
            ref: props.tableRef
        },
        _react2.default.createElement(WeekScheduleViewDays, null),
        _react2.default.createElement(WeekScheduleViewWeekGridBody, {
            cellsPerTimeLabel: props.cellsPerTimeLabel,
            cellHeight: props.cellHeight
        })
    );
}

function WeekScheduleViewDays(props) {
    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(WeekScheduleViewDay, null),
            WEEKDAYS.map(function (weekDay) {
                return _react2.default.createElement(
                    WeekScheduleViewDay,
                    null,
                    weekDay
                );
            })
        )
    );
}

function WeekScheduleViewDay(props) {
    return _react2.default.createElement(
        'th',
        {
            className: 'alegrify-week-schedule__day'
        },
        props.children
    );
}

function WeekScheduleViewWeekGridBody(props) {
    var times = new Array(48).fill(null).map(function (nothing, index) {
        return formatTimeLabel(index);
    });

    return _react2.default.createElement(
        'tbody',
        null,
        times.map(function (time, index) {
            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    WeekScheduleViewTime,
                    null,
                    index % props.cellsPerTimeLabel === 0 ? time : ''
                ),
                WEEKDAYS.map(function () {
                    return _react2.default.createElement(WeekScheduleViewEmptyCell, {
                        cellHeight: props.cellHeight
                    });
                })
            );
        })
    );
}

function WeekScheduleViewTime(props) {
    return _react2.default.createElement(
        'th',
        {
            className: 'alegrify-week-schedule__time'
        },
        props.children
    );
}

function WeekScheduleViewEmptyCell(props) {
    return _react2.default.createElement('td', {
        className: 'alegrify-week-schedule__cell',
        style: heightCss(props.cellHeight)
    });
}

function WeekScheduleViewRange(props) {
    var hourHeight = props.cellHeight / props.hoursPerCell;

    var dateFrom = new Date(props.range.from);
    var hoursFrom = dateFrom.getHours();
    var minutesFrom = dateFrom.getMinutes();

    var offsetTop = calculateOffsetTop(hoursFrom, minutesFrom, hourHeight);

    var dateTill = new Date(props.range.till);
    var hoursTill = dateTill.getHours();
    var minutesTill = dateTill.getMinutes();

    // @Todo: What about cross day ranges?
    var timeDiffInMinutes = hoursTill * 60 + minutesTill - (hoursFrom * 60 + minutesFrom);
    var height = timeDiffInMinutes / 60 * hourHeight;

    // @Todo what about days that are not 86400
    var weekDayIndexFrom = (dateFrom.getDay() + 6) % 7;
    var offsetLeft = weekDayIndexFrom * CELL_WIDTH;

    var style = heightCss(height);
    style.top = offsetTop + 'px';
    style.left = offsetLeft + 'px';

    return _react2.default.createElement(
        'li',
        {
            className: 'alegrify-week-schedule__selection',
            style: style,
            onMouseDown: props.onMouseDown
        },
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-week-schedule__selection-content'
            },
            _react2.default.createElement('button', {
                className: 'alegrify-week-schedule__selection-resize-up',
                onMouseDown: function onMouseDown(e) {
                    return props.onMouseDown(e, { resize: 'TOP' });
                }
            }),
            _react2.default.createElement('button', {
                className: 'alegrify-week-schedule__selection-resize-down',
                onMouseDown: function onMouseDown(e) {
                    return props.onMouseDown(e, { resize: 'BOTTOM' });
                }
            })
        )
    );
}

// Helpers, pure methods
function formatTimeLabel(index) {
    var hour = formatToXDigits(Math.floor(index / 2), 2);
    var min = formatToXDigits(index % 2 * 30, 2);

    return hour + ':' + min;
}

function formatToXDigits(number, digits) {
    var start = '';

    for (var i = 0; i < digits; i++) {
        start += '0';
    }

    return (start + number).substr(-1 * digits, digits);
}

function calculateOffsetTop(hours, minutes, hourHeight) {
    return hours * hourHeight + minutes / 60 * hourHeight - hourHeight;
}

function heightCss(height) {
    return {
        height: height + 'px',
        minHeight: height + 'px',
        maxHeight: height + 'px'
    };
}

WeekSchedule.propTypes = {
    className: _propTypes2.default.string,
    ranges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        from: _propTypes2.default.number,
        till: _propTypes2.default.number
    })),
    cellHeight: _propTypes2.default.number,
    hoursPerCell: _propTypes2.default.number,
    cellsPerTimeLabel: _propTypes2.default.number
};
WeekSchedule.defaultProps = {
    cellHeight: 16,
    hoursPerCell: 0.5,
    cellsPerTimeLabel: 4
};
WeekSchedule.propExamples = {
    className: '',
    ranges: [{ from: 1539795815257, till: 1539803034873 }],
    cellHeight: 16,
    hoursPerCell: 0.5,
    cellsPerTimeLabel: 4
};

exports.default = WeekSchedule;