import React from 'react';
import SimpleUiComponent, { SimpleUiComponentPropTypes } from './abstract/simple-ui-component';

/**
 * <Section />
 */
function Section(props) {
    return SimpleUiComponent(<section />, 'alegrify-section', props);
}

Section.propTypes = SimpleUiComponentPropTypes;

export default Section;
