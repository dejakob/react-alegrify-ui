import React from 'react';
import PropTypes from 'prop-types';

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
    const classNames = ['alegrify-card'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }
    
    if (props.small) {
        classNames.push('alegrify-card--small');
    }

    return (
        <section
            className={classNames.join(' ')}
        >
            <div
                className="alegrify-card__header"    
            >
                <h2
                    className="alegrify-card__title"
                >
                    {props.title}
                </h2>
            </div>
            <div
                className="alegrify-card__content"
            >
                {props.children}
            </div>
            <div
                className="alegrify-card__footer"
            >
                {props.footer}
            </div>
        </section>
    )
}

Card.propTypes = {

    /**
     * Card content
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Footer component
     */
    footer: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Small card variant
     */
    small: PropTypes.bool,

    /**
     * Card title
     */
    title: PropTypes.string.isRequired
};
Card.defaultProps = {
    small: false
};
Card.propExamples = {
    children: <p className="alegrify-p">Here's some card content</p>,
    footer: 'Footer content',
    className: '',
    small: false,
    title: 'Card title'
};

export default Card;
