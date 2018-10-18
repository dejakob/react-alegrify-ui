'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Todo: custom translations
var WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

var SELECTION_PIXEL_VALUES = {
    startOffset: 64,
    cell: 64,
    hour: 128,
    hoursPerCell: 0.5
};

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
        return _this;
    }

    _createClass(WeekSchedule, [{
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

            //@Todo Caniuse clientX?
            var clientX = eventData.clientX,
                clientY = eventData.clientY;


            eventData.preventDefault();
            eventData.stopPropagation();

            this.setState({
                selectedRangeIndex: rangeIndex
            });
            this.mouseDownOffset = { x: clientX, y: clientY };
        }
    }, {
        key: 'handleGenericMouseMove',
        value: function handleGenericMouseMove(eventData) {
            if (typeof this.state.selectedRangeIndex === 'number') {

                //@Todo Caniuse clientX?
                var clientX = eventData.clientX,
                    clientY = eventData.clientY;


                var xDiff = clientX - this.mouseDownOffset.x;
                var yDiff = clientY - this.mouseDownOffset.y;

                var moveDownCells = Math.round(yDiff / SELECTION_PIXEL_VALUES.cell);
                var moveRightCells = Math.round(xDiff / SELECTION_PIXEL_VALUES.cell);

                // @Todo resize
                if (moveDownCells !== 0 || moveRightCells !== 0) {
                    var updatedRanges = [].concat(_toConsumableArray(this.state.ranges));

                    var moveDownHours = moveDownCells * SELECTION_PIXEL_VALUES.hoursPerCell;
                    var moveRightDays = moveRightCells;

                    updatedRanges[this.state.selectedRangeIndex].from = updatedRanges[this.state.selectedRangeIndex].from + moveDownHours * 3600000;
                    updatedRanges[this.state.selectedRangeIndex].till = updatedRanges[this.state.selectedRangeIndex].till + moveDownHours * 3600000;

                    // @Todo what about days that are not 86400s
                    updatedRanges[this.state.selectedRangeIndex].from = updatedRanges[this.state.selectedRangeIndex].from + moveRightDays * 86400000;
                    updatedRanges[this.state.selectedRangeIndex].till = updatedRanges[this.state.selectedRangeIndex].till + moveRightDays * 86400000;

                    this.setState({
                        ranges: updatedRanges
                    });

                    // @Todo: round at middle of cell
                    this.mouseDownOffset = { x: clientX, y: clientY };
                    console.log('from', new Date(updatedRanges[this.state.selectedRangeIndex].from).toString());
                    console.log('till', new Date(updatedRanges[this.state.selectedRangeIndex].till).toString());
                }
            }
        }
    }, {
        key: 'handleBodyMouseUp',
        value: function handleBodyMouseUp() {
            this.setState({ selectedRangeIndex: null });
        }
    }, {
        key: 'render',
        value: function render() {
            var methods = {
                onRangeMouseDown: this.handleRangeMouseDown,
                onGenericMouseMove: this.handleGenericMouseMove
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
        _react2.default.createElement(WeekScheduleViewWeekGrid, null),
        _react2.default.createElement(
            'ul',
            {
                className: 'alegrify-week-schedule__selections'
            },
            props.ranges.map(function (range, rangeIndex) {
                return _react2.default.createElement(WeekScheduleViewRange, {
                    range: range,
                    onMouseDown: function onMouseDown(eventData) {
                        return props.onRangeMouseDown(eventData, rangeIndex);
                    }
                });
            })
        )
    );
}

function WeekScheduleViewWeekGrid(props) {
    return _react2.default.createElement(
        'table',
        {
            className: 'alegrify-week-schedule__table'
        },
        _react2.default.createElement(WeekScheduleViewDays, null),
        _react2.default.createElement(WeekScheduleViewWeekGridBody, null)
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
    var times = new Array(47).fill(null).map(function (nothing, index) {
        return formatTimeLabel(index);
    });

    return _react2.default.createElement(
        'tbody',
        null,
        times.map(function (time) {
            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    WeekScheduleViewTime,
                    null,
                    time
                ),
                WEEKDAYS.map(function () {
                    return _react2.default.createElement(WeekScheduleViewEmptyCell, null);
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
        className: 'alegrify-week-schedule__cell'
    });
}

function WeekScheduleViewRange(props) {
    var dateFrom = new Date(props.range.from);
    var hoursFrom = dateFrom.getHours();
    var minutesFrom = dateFrom.getMinutes();

    var offsetTop = hoursFrom * SELECTION_PIXEL_VALUES.hour + minutesFrom / 60 * SELECTION_PIXEL_VALUES.hour - SELECTION_PIXEL_VALUES.cell;

    var dateTill = new Date(props.range.till);
    var hoursTill = dateTill.getHours();
    var minutesTill = dateTill.getMinutes();

    // @Todo: What about cross day ranges?
    var timeDiffInMinutes = hoursTill * 60 + minutesTill - (hoursFrom * 60 + minutesFrom);
    var height = timeDiffInMinutes / 60 * SELECTION_PIXEL_VALUES.hour;

    // @Todo what about days that are not 86400
    var weekDayIndexFrom = (dateFrom.getDay() + 6) % 7;
    var offsetLeft = weekDayIndexFrom * SELECTION_PIXEL_VALUES.cell;

    return _react2.default.createElement(
        'li',
        {
            className: 'alegrify-week-schedule__selection',
            style: { top: offsetTop + 'px', height: height + 'px', minHeight: height + 'px', maxHeight: height + 'px', left: offsetLeft + 'px' },
            onMouseDown: props.onMouseDown
        },
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-week-schedule__selection-content'
            },
            _react2.default.createElement('button', {
                className: 'alegrify-week-schedule__selection-resize-up'
            }),
            _react2.default.createElement('button', {
                className: 'alegrify-week-schedule__selection-resize-down'
            })
        )
    );
}

// Helpers, pure methods
function formatTimeLabel(index) {
    var hour = formatToXDigits(Math.round(index / 2), 2);
    var min = formatToXDigits((index + 1) % 2 * 30, 2);

    return hour + ':' + min;
}

function formatToXDigits(number, digits) {
    var start = '';

    for (var i = 0; i < digits; i++) {
        start += '0';
    }

    return (start + number).substr(-1 * digits, digits);
}

WeekSchedule.propTypes = {
    className: _propTypes2.default.string,
    ranges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        from: _propTypes2.default.number,
        till: _propTypes2.default.number
    }))
};
WeekSchedule.propExamples = {
    className: '',
    ranges: [{ from: 1539795815257, till: 1539803034873 }]
};

exports.default = WeekSchedule;