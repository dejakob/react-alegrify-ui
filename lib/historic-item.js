import React from 'react';
import PropTypes from 'prop-types';
import DateIndicator from './date-indicator';

/**
 * ```jsx
 * <HistoricItem
 *   date="2018-10-28T09:00:00"
 * >
 *     <H2>Something interesting happened</H2>
 *     <P>Lorem ipsum...</P>
 * </HistoricItem>
 * ```
 */
function HistoricItem(props) {
    const classNames = ['alegrify-historic-item'];

    if (typeof props.className === 'string' && props.className.trim() !== '') {
        classNames.push(props.className);
    }

    return (
        <section
            className={classNames.join(' ')}
        >
            <DateIndicator
                className="alegrify-historic-item__date"
                date={props.date}
            />
            <div
                className="alegrify-historic-item__content"
            >
                {props.children}
            </div>
        </section>
    );
}

HistoricItem.propTypes = {

    /**
     * Content for the historic item
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
     * Date to show / When did this occur?
     */
    date: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
};
HistoricItem.defaultProps = {
    children: null,
    date: new Date().toString(),
    className: ''
}
HistoricItem.propExamples = HistoricItem.defaultProps;

export default HistoricItem;
