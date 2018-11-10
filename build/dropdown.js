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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ```jsx
 * <Dropdown>
 *      <DropdownItem
 *          value="cookies"
 *      >
 *          Cookies
 *      </DropdownItem>
 *      <DropdownItem
 *          value="apples"
 *      >
 *          Apples
 *      </DropdownItem>
 * </Dropdown>
 * ```
 */
var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

        _this.actions = {
            handleSelectOption: _this.handleSelectOption.bind(_this)
        };
        return _this;
    }

    _createClass(Dropdown, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                value: this.props.value || null
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.value !== this.state.value) {
                this.setState({
                    value: newProps.value || null
                });
            }
        }
    }, {
        key: 'handleSelectOption',
        value: function handleSelectOption(eventData) {}
    }, {
        key: 'render',
        value: function render() {
            return DropdownView(Object.assign({}, this.props, this.state, this.actions));
        }
    }]);

    return Dropdown;
}(_react.Component);

/**
 * View for Dropdown
 */


function DropdownView(props) {
    var classNames = ['alegrify-dropdown__container'];

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    return _react2.default.createElement(
        'div',
        {
            className: classNames.join(' ')
        },
        _react2.default.createElement('input', {
            className: 'alegrify-dropdown__trigger'
        }),
        _react2.default.createElement(
            'label',
            {
                className: 'alegrify-dropdown__label',
                htmlFor: 'my-dropdown',
                'aria-controls': ''
            },
            props.placeholder || '...'
        ),
        _react2.default.createElement(
            'fieldset',
            {
                className: 'alegrify-dropdown',
                role: 'menu'
            },
            renderChildren()
        )
    );

    /**
     * Render dropdown items
     * (Can either be an array of children or React.children)
     */
    function renderChildren() {
        if (typeof props.children.map === 'function') {
            return children.map(renderChild);
        } else {
            return _react2.default.Children.map(props.children, renderChild);
        }
    }

    /**
     * Render single child
     * @param {Node} child 
     * @param {String} index 
     */
    function renderChild(child) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        return _react2.default.cloneElement(child, {
            onSelect: props.handleSelectOption,
            multiSelect: props.multiSelect,
            name: props.name,
            key: index
        });
    }
}

// Todo: disabled
// Todo: multiselect
// Todo: keyboard input

Dropdown.propTypes = {

    /**
     * Id of the dropdown
     */
    id: _propTypes2.default.string.isRequired,

    /**
     * Name of the dropdown
     */
    name: _propTypes2.default.string.isRequired,

    /**
     * Items for the dropdown
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * Selected value of the dropdown
     */
    value: _propTypes2.default.string,

    /**
     * Placeholder message for dropdown label
     */
    placeholder: _propTypes2.default.string,

    /**
     * Should the dropdown be disabled?
     */
    disabled: _propTypes2.default.bool,

    /**
     * Can multiple items be selected?
     */
    multiSelect: _propTypes2.default.bool
};
Dropdown.defaultProps = {
    value: null,
    placeholder: '...',
    disabled: false,
    multiSelect: false
};
Dropdown.propExamples = Dropdown.defaultProps;

exports.default = Dropdown;