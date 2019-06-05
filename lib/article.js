import React from 'react';
import PropTypes from 'prop-types';
import { attachUniversalProps } from './helpers/universal-props';

/**
 * <Article />
 * 
 * Simple HTML article.
 * 
 * Full width on smaller viewports, 2/3 on larger viewports
 * 
 * ```jsx
 * <Article>
 *   Amazing content
 * </Article>
 * ```
 */
function Article(props) {
    const classNames = ['alegrify-article'];

    if (typeof props.className === 'string') {
        classNames.push(props.className);
    }

    return (
        <article
            className={classNames.join(' ')}
        >
            {props.children}
        </article>
    )
}

Article.propTypes = {

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
    className: PropTypes.string
};
Article.propExamples = {
    children: 'Article content'
};

export default attachUniversalProps(Article);
