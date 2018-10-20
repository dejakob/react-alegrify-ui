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

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _constants = require('./constants.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   TODOS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   =============
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Multitouch resize gesture
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Test in other timezones
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Button to add range
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Caniuse clientX/clientY?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * what about days that are not 86400s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Test RTL
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var WeekSchedule = function (_Component) {
    _inherits(WeekSchedule, _Component);

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
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                selectedRangeIndex: null,
                ranges: this.props.ranges || []
            });
            this.mouseDownOffset = { x: null, y: null };

            if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.addEventListener === 'function') {
                document.addEventListener('mouseup', this.handleBodyMouseUp);
                document.addEventListener('touchend', this.handleBodyMouseUp);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.removeEventListener === 'function') {
                document.removeEventListener('mouseup', this.handleBodyMouseUp);
                document.addEventListener('touchend', this.handleBodyMouseUp);
            }
        }
    }, {
        key: 'handleRangeMouseDown',
        value: function handleRangeMouseDown(eventData, rangeIndex) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            eventData.preventDefault();
            eventData.stopPropagation();

            var clientX = void 0;
            var clientY = void 0;

            if (eventData.touches && eventData.touches.length) {
                clientX = eventData.touches[0].clientX;
                clientY = eventData.touches[0].clientY;
            } else {
                clientX = eventData.clientX;
                clientY = eventData.clientY;
            }

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
                eventData.preventDefault();
                eventData.stopPropagation();

                var clientX = void 0;
                var clientY = void 0;

                if (eventData.touches && eventData.touches.length) {
                    clientX = eventData.touches[0].clientX;
                    clientY = eventData.touches[0].clientY;
                } else {
                    clientX = eventData.clientX;
                    clientY = eventData.clientY;
                }

                var xDiff = clientX - this.gridBoundaries.left;
                var yDiff = clientY - this.gridBoundaries.top;

                var moveDownCells = Math.round(yDiff / this.props.cellHeight);
                var moveRightCells = Math.floor(xDiff / _constants.DEFAULT_CELL_WIDTH);

                if (moveDownCells !== 0 || moveRightCells !== 0) {
                    var updatedRanges = [].concat(_toConsumableArray(this.state.ranges));

                    var newHourValue = moveDownCells * this.props.hoursPerCell;
                    var newWeekDayValue = moveRightCells;

                    var fromMoment = (0, _moment2.default)(updatedRanges[this.state.selectedRangeIndex].from);
                    var tillMoment = (0, _moment2.default)(updatedRanges[this.state.selectedRangeIndex].till);

                    var startOfDay = fromMoment.clone().startOf('day').toDate().getTime();
                    var endOfDay = fromMoment.clone().endOf('day').toDate().getTime();

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

                    var fromTime = updatedRanges[this.state.selectedRangeIndex].from;
                    var tillTime = updatedRanges[this.state.selectedRangeIndex].till;

                    if (tillTime < fromTime || fromTime < startOfDay && moveRightCells === 0 || tillTime > endOfDay && moveRightCells === 0) {
                        updatedRanges.splice(this.state.selectedRangeIndex, 1);

                        return this.setState({
                            ranges: updatedRanges,
                            selectedRangeIndex: null
                        });
                    }

                    this.setState({
                        ranges: updatedRanges
                    });

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

                var clientX = void 0;
                var clientY = void 0;

                if (eventData.touches && eventData.touches.length) {
                    clientX = eventData.touches[0].clientX;
                    clientY = eventData.touches[0].clientY;
                } else {
                    clientX = eventData.clientX;
                    clientY = eventData.clientY;
                }

                var xDiff = clientX - this.gridBoundaries.left;
                var yDiff = clientY - this.gridBoundaries.top;

                var moveDownCells = Math.floor(yDiff / this.props.cellHeight);
                var moveRightCells = Math.floor(xDiff / _constants.DEFAULT_CELL_WIDTH);
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

            return (0, _view2.default)(Object.assign({}, this.props, this.state, methods));
        }
    }]);

    return WeekSchedule;
}(_react.Component);

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
    cellHeight: _constants.DEFAULT_CELL_HEIGHT,
    hoursPerCell: _constants.DEFAULT_HOURS_PER_CELL,
    cellsPerTimeLabel: _constants.DEFAULT_CELLS_PER_TIME_LABEL
};
WeekSchedule.propExamples = {
    className: '',
    ranges: [{
        from: new Date('2018-10-20T08:00:00').getTime(),
        till: new Date('2018-10-20T17:00:00').getTime()
    }],
    cellHeight: _constants.DEFAULT_CELL_HEIGHT,
    hoursPerCell: _constants.DEFAULT_HOURS_PER_CELL,
    cellsPerTimeLabel: _constants.DEFAULT_CELLS_PER_TIME_LABEL
};

exports.default = WeekSchedule;