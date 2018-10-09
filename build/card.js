'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Card />
 * 
 * Card component
 * 
 * Consists out of a header, content and footer
 * 
 * ```jsx
 * <Card
 *  title="Card title"
 *  footer={<FooterComponent />}
 * >
 *   <P>
 *     Card content
 *   </P>
 * </Card>
 * ```
 */
function Card(props) {
    var classNames = ['alegrify-card'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    if (props.small) {
        classNames.push('alegrify-card--small');
    }

    return _react2.default.createElement(
        'section',
        {
            className: classNames.join(' ')
        },
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-card__header'
            },
            _react2.default.createElement(
                'h2',
                {
                    className: 'alegrify-card__title'
                },
                props.title
            )
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-card__content'
            },
            props.children
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'alegrify-card__footer'
            },
            props.footer
        )
    );
}

Card.propTypes = {

    /**
     * Card content
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Footer component
     */
    footer: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,

    /**
     * Additional classnames
     */
    className: _propTypes2.default.string,

    /**
     * Small card variant
     */
    small: _propTypes2.default.bool,

    /**
     * Card title
     */
    title: _propTypes2.default.string.isRequired
};
Card.defaultProps = {
    small: false
};
Card.propExamples = {
    children: _react2.default.createElement(
        'p',
        { className: 'alegrify-p' },
        'Here\'s some card content'
    ),
    footer: 'Footer content',
    className: '',
    small: false,
    title: 'Card title'
};

exports.default = Card;