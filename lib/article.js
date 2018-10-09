import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Article />
 * 
 * Simple HTML article.
 * Full width on smaller viewports, 2/3 on larger viewports
 * 
 * ```
 * <Article>
 *   Amazing content
 * </Article>
 * ```
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
Article.propExamples = {
    children: 'Article content'
};

export default Article;
