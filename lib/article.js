import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Article />
 * @param {Object} props 
 */
function Article(props) {
    const classNames = ['alegrify-article'];

    classNames.push(props.className);

    return (
        <article
            className={classNames.join(' ')}
        >
            {props.children}
        </article>
    )
}

Article.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Article;
