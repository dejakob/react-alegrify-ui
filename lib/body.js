import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Body />
 */
function Body(props) {
    const classNames = ['alegrify-body'];
    let style;
    let content = props.children;

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    if (props.gradient) {
        
    }

    if (props.backgroundImage) {
        classNames.push('alegrify-body--fixed-background');
        style = { ...(props.style || {}), backgroundImage: `url(${props.backgroundImage})` };
        content = <BodyPageScroll>{props.children}</BodyPageScroll>;
    }

    return (
        <body
            className={classNames.join(' ')}
            style={style}
        >
            {content}
        </body>
    )
}

function BodyPageScroll(props) {
    return (
        <div className="alegrify-body__page-scroll">{props.children}</div>
    )
}

Body.propTypes = {
    /**
     * Content of the article
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /**
     * Additional classnames
     */
    className: PropTypes.string,

    /**
     * Additional classnames
     */
    style: PropTypes.object,

    /**
     * Fixed background image
     */
    backgroundImage: PropTypes.string,

    /**
     * Show gradient instead of fixed color
     */
    gradient: PropTypes.string,
};

export default Body;
