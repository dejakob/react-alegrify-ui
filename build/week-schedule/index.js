"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _view = _interopRequireDefault(require("./view"));

var _constants = require("./constants");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var rangeEquals = function rangeEquals(rangeA, rangeB) {
  var strA = (rangeA || []).map(function (range) {
    return "".concat(range.from, "-").concat(range.till);
  }).join('|');
  var strB = (rangeB || []).map(function (range) {
    return "".concat(range.from, "-").concat(range.till);
  }).join('|');
  return strA === strB;
};

var WeekSchedule =
/*#__PURE__*/
function (_Component) {
  _inherits(WeekSchedule, _Component);

  function WeekSchedule() {
    var _this;

    _classCallCheck(this, WeekSchedule);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WeekSchedule).call(this));
    _this.handleRangeMouseDown = _this.handleRangeMouseDown.bind(_assertThisInitialized(_this));
    _this.handleGenericMouseMove = _this.handleGenericMouseMove.bind(_assertThisInitialized(_this));
    _this.handleBodyMouseUp = _this.handleBodyMouseUp.bind(_assertThisInitialized(_this));
    _this.handleTableClick = _this.handleTableClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WeekSchedule, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        selectedRangeIndex: null,
        ranges: this.props.ranges || []
      });
      this.mouseDownOffset = {
        x: null,
        y: null
      };

      if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.addEventListener === 'function') {
        document.addEventListener('mouseup', this.handleBodyMouseUp);
        document.addEventListener('touchend', this.handleBodyMouseUp);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (!rangeEquals(newProps.ranges, this.props.ranges)) {
        this.setState({
          selectedRangeIndex: null,
          ranges: this.props.ranges || []
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.removeEventListener === 'function') {
        document.removeEventListener('mouseup', this.handleBodyMouseUp);
        document.addEventListener('touchend', this.handleBodyMouseUp);
      }
    }
  }, {
    key: "handleRangeMouseDown",
    value: function handleRangeMouseDown(eventData, rangeIndex) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // Avoid issues on multitouch
      if (!this.state.selectedRangeIndex) {
        eventData.preventDefault();
        eventData.stopPropagation();

        var _getCursorOrTouchPosi = (0, _helpers.getCursorOrTouchPosition)(eventData),
            clientX = _getCursorOrTouchPosi.clientX,
            clientY = _getCursorOrTouchPosi.clientY;

        this.setState({
          selectedRangeIndex: rangeIndex
        });
        this.mouseDownOffset = {
          x: clientX,
          y: clientY
        };
        this.gridBoundaries = this.tableRef.getBoundingClientRect();
        this.resizeMode = options.resize;

        if (eventData.touches && eventData.touches.length === 2) {
          this.touchDistanceY = Math.abs(eventData.touches[1].clientY - eventData.touches[0].clientY);
        }
      }
    }
  }, {
    key: "handleGenericMouseMove",
    value: function handleGenericMouseMove(eventData) {
      if (typeof this.state.selectedRangeIndex === 'number') {
        var _getCursorOrTouchPosi2 = (0, _helpers.getCursorOrTouchPosition)(eventData),
            clientX = _getCursorOrTouchPosi2.clientX,
            clientY = _getCursorOrTouchPosi2.clientY;

        var xDiff = clientX - this.gridBoundaries.left; // Todo constant

        var yDiff = clientY - this.gridBoundaries.top - 64;
        var moveDownCells = Math.round(yDiff / this.props.cellHeight);
        var moveRightCells = Math.floor(xDiff / _constants.DEFAULT_CELL_WIDTH);

        if (eventData.touches && eventData.touches.length === 2) {
          var newTouchDistanceY = Math.abs(eventData.touches[1].clientY - eventData.touches[0].clientY);

          if (this.touchDistanceY) {
            var updatedRanges = _toConsumableArray(this.state.ranges);

            var increaseFactor = newTouchDistanceY / this.touchDistanceY;
            var fromMoment = (0, _moment.default)(updatedRanges[this.state.selectedRangeIndex].from);
            var tillMoment = (0, _moment.default)(updatedRanges[this.state.selectedRangeIndex].till);
            var additionInMinutes = fromMoment.hour() * increaseFactor * 60 - fromMoment.hour() * 60;
            updatedRanges[this.state.selectedRangeIndex].from = fromMoment.subtract(additionInMinutes / 2, 'minute').toDate().getTime();
            updatedRanges[this.state.selectedRangeIndex].till = tillMoment.add(additionInMinutes / 2, 'minute').toDate().getTime();
            eventData.preventDefault();
            eventData.stopPropagation();
            this.props.onChange(updatedRanges);
            this.setState({
              ranges: updatedRanges
            });
          }

          this.touchDistanceY = newTouchDistanceY;
        } else if (moveDownCells !== 0 || moveRightCells !== 0) {
          var _updatedRanges = _toConsumableArray(this.state.ranges);

          var newHourValue = moveDownCells * this.props.hoursPerCell;
          var newWeekDayValue = moveRightCells;

          var _fromMoment = (0, _moment.default)(_updatedRanges[this.state.selectedRangeIndex].from);

          var _tillMoment = (0, _moment.default)(_updatedRanges[this.state.selectedRangeIndex].till);

          var startOfDay = _fromMoment.clone().startOf('day').toDate().getTime();

          var endOfDay = _fromMoment.clone().endOf('day').toDate().getTime();

          _updatedRanges[this.state.selectedRangeIndex].from = _fromMoment.isoWeekday(newWeekDayValue).toDate().getTime();
          _updatedRanges[this.state.selectedRangeIndex].till = _tillMoment.isoWeekday(newWeekDayValue).toDate().getTime();

          if (this.resizeMode === 'TOP') {
            _updatedRanges[this.state.selectedRangeIndex].from = _fromMoment.hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).toDate().getTime();
          }

          if (this.resizeMode === 'BOTTOM') {
            _updatedRanges[this.state.selectedRangeIndex].till = _tillMoment.hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).toDate().getTime();
          }

          if (!this.resizeMode) {
            // @Todo what about days that are not 86400s
            var length = _updatedRanges[this.state.selectedRangeIndex].till - _updatedRanges[this.state.selectedRangeIndex].from;
            _updatedRanges[this.state.selectedRangeIndex].from = _fromMoment.hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).subtract(length / 2000, 's').toDate().getTime();
            _updatedRanges[this.state.selectedRangeIndex].till = _fromMoment.add(length / 1000, 's').toDate().getTime();
          }

          var fromTime = _updatedRanges[this.state.selectedRangeIndex].from;
          var tillTime = _updatedRanges[this.state.selectedRangeIndex].till;

          if (tillTime < fromTime || fromTime < startOfDay && moveRightCells === 0 || tillTime > endOfDay && moveRightCells === 0) {
            _updatedRanges.splice(this.state.selectedRangeIndex, 1);

            this.props.onChange(_updatedRanges);
            return this.setState({
              ranges: _updatedRanges,
              selectedRangeIndex: null
            });
          }

          eventData.preventDefault();
          eventData.stopPropagation();
          this.props.onChange(_updatedRanges);
          this.setState({
            ranges: _updatedRanges
          });
          this.mouseDownOffset = {
            x: clientX,
            y: clientY
          };
        }
      }
    }
  }, {
    key: "handleBodyMouseUp",
    value: function handleBodyMouseUp() {
      this.setState({
        selectedRangeIndex: null
      });
    }
  }, {
    key: "handleTableClick",
    value: function handleTableClick(eventData) {
      if (eventData.target.localName === 'td') {
        eventData.preventDefault();
        eventData.stopPropagation();
        this.gridBoundaries = this.tableRef.getBoundingClientRect();

        var _getCursorOrTouchPosi3 = (0, _helpers.getCursorOrTouchPosition)(eventData),
            clientX = _getCursorOrTouchPosi3.clientX,
            clientY = _getCursorOrTouchPosi3.clientY;

        var xDiff = clientX - this.gridBoundaries.left;
        var yDiff = clientY - this.gridBoundaries.top - 64;
        var moveDownCells = Math.floor(yDiff / this.props.cellHeight);
        var moveRightCells = Math.floor(xDiff / _constants.DEFAULT_CELL_WIDTH);
        var newWeekDayValue = moveRightCells;
        var newHourValue = moveDownCells * this.props.hoursPerCell;
        var fromMoment = (0, _moment.default)(this.state.ranges.length ? this.state.ranges[0].from : Date.now());
        var newRange = {
          from: fromMoment.isoWeekday(newWeekDayValue).hour(newHourValue).minute((newHourValue - Math.floor(newHourValue)) * 60).toDate().getTime(),
          till: fromMoment.add(3, 'hour').toDate().getTime()
        };
        var ranges = [].concat(_toConsumableArray(this.state.ranges), [newRange]);
        this.props.onChange(ranges);
        this.setState({
          ranges: ranges
        });
      }
    }
  }, {
    key: "render",
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
      return (0, _view.default)(Object.assign({}, this.props, this.state, methods));
    }
  }]);

  return WeekSchedule;
}(_react.Component);

WeekSchedule.propTypes = {
  className: _propTypes.default.string,
  ranges: _propTypes.default.arrayOf(_propTypes.default.shape({
    from: _propTypes.default.number,
    till: _propTypes.default.number
  })),
  cellHeight: _propTypes.default.number,
  hoursPerCell: _propTypes.default.number,
  cellsPerTimeLabel: _propTypes.default.number,
  onChange: _propTypes.default.func.isRequired
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
var _default = WeekSchedule;
exports.default = _default;