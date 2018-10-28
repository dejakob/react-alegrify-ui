import React from 'react';
import SimpleUiComponent, { SimpleUiComponentPropTypes } from './abstract/simple-ui-component';

/**
 * <Dl />
 * @param {Object} props 
 */
function Dl(props) {
    return SimpleUiComponent(<dl />, 'alegrify-dl', props);
}

/**
 * <Dt />
 * @param {Object} props 
 */
function Dt(props) {
    return SimpleUiComponent(<dt />, 'alegrify-dl__dt', props);
}

/**
 * <Ds />
 * @param {Object} props 
 */
function Dd(props) {
    return SimpleUiComponent(<dd />, 'alegrify-dl__dd', props);
}

Dl.propTypes = SimpleUiComponentPropTypes;
Dt.propTypes = SimpleUiComponentPropTypes;
Dd.propTypes = SimpleUiComponentPropTypes;

export default Dl;
export {
    Dt,
    Dd
};
