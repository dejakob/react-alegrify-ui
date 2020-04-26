import React from 'react';
import PropTypes from 'prop-types';
import SimpleUiComponent, { SimpleUiComponentPropTypes } from './abstract/simple-ui-component';

/**
 * <H1 />
 * @param {Object} props 
 */
function H1(props) {
    return SimpleUiComponent(<h1 />, 'alegrify-h1', props);
}

/**
 * <H2 />
 * @param {Object} props 
 */
function H2(props) {
    return SimpleUiComponent(<h2 />, 'alegrify-h2', props);
}

/**
 * <H3 />
 * @param {Object} props 
 */
function H3(props) {
    return SimpleUiComponent(<h3 />, 'alegrify-h3', props);
}

/**
 * <P />
 * @param {Object} props 
 */
function P(props) {
    const classNames = ['alegrify-p'];

    if (props.welcome) {
        classNames.push('alegrify-p--welcome');
    }

    return SimpleUiComponent(<p />, classNames.join(' '), props);
}

/**
 * <Em />
 * @param {Object} props 
 */
function Em(props) {
    return SimpleUiComponent(<em />, 'alegrify-em', props);
}

/**
 * <Strong />
 * @param {Object} props 
 */
function Strong(props) {
    return SimpleUiComponent(<strong />, 'alegrify-strong', props);
}

H1.propTypes = SimpleUiComponentPropTypes;
H2.propTypes = SimpleUiComponentPropTypes;
H3.propTypes = SimpleUiComponentPropTypes;
P.propTypes = { ...SimpleUiComponentPropTypes, welcome: PropTypes.boolean };
Em.propTypes = SimpleUiComponentPropTypes;
Strong.propTypes = SimpleUiComponentPropTypes;

export {
    H1,
    H2,
    H3,
    P,
    Em,
    Strong
};
