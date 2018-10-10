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
    var headerClassNames = ['alegrify-card__header'];
    var headerAdditionalStyle = {};

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    if (props.small) {
        classNames.push('alegrify-card--small');
    }

    if (typeof props.headerImage === 'string' && props.headerImage.length > 0) {
        headerClassNames.push('alegrify-card__header--background-image');
        headerAdditionalStyle.backgroundImage = 'url(' + props.headerImage + ')';
    }

    return _react2.default.createElement(
        'section',
        {
            className: classNames.join(' ')
        },
        typeof props.title === 'string' && props.title.trim().length > 0 ? _react2.default.createElement(
            'div',
            {
                className: headerClassNames.join(' '),
                style: headerAdditionalStyle
            },
            _react2.default.createElement(
                'h2',
                {
                    className: 'alegrify-card__title'
                },
                props.title
            )
        ) : null,
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
    title: _propTypes2.default.string,

    /**
     * Background image of the card header
     */
    headerImage: _propTypes2.default.string
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
    title: 'Card title',
    headerImage: 'https://source.unsplash.com/800x200'
};

exports.default = Card;