import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

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
    const headerClassNames = ['alegrify-card__header'];
    const headerAdditionalStyle = {};

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }
    
    if (props.small) {
        classNames.push('alegrify-card--small');
    }

    if (typeof props.headerImage === 'string' && props.headerImage.length > 0) {
        headerClassNames.push('alegrify-card__header--background-image');
        headerAdditionalStyle.backgroundImage = `url(${props.headerImage})`;
    }

    return (
        <section
            className={classNames.join(' ')}
        >
            {
                typeof props.title === 'string' && props.title.trim().length > 0 ?
                (
                    <div
                        className={headerClassNames.join(' ')}
                        style={headerAdditionalStyle}
                    >
                        {props.headerChildren}
                        <h2
                            className="alegrify-card__title"
                        >
                            {props.title}
                        </h2>
                    </div>
                ) : null
            }

            <div
                className="alegrify-card__content"
            >
                {props.children}
            </div>

            {props.footer ? (
                <div
                    className="alegrify-card__footer"
                >
                    {props.footer}
                </div>
            ) : null}
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
    ]),

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
    title: PropTypes.string,

    /**
     * Background image of the card header
     */
    headerImage: PropTypes.string
};
Card.defaultProps = {
    className: '',
    footer: null,
    small: false,
    title: '',
    headerImage: ''
};

export default attachUniversalProps(Card);
