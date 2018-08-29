import React from 'react';
import PropTypes from 'prop-types';

/**
 * <Main />
 * @param {Object} props
 */
function Main(props) {
    const classNames = ['alegrify-main'];

    if (props.className) {
        classNames.push(props.className);
    }

    return (
        <main
            className={classNames.join(' ')}
        >
            {props.children}
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

export default Main;
