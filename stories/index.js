import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import * as Components from '../';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Decorator from './decorator';

const BLACKLIST = ['COLORS', 'MEDIA', 'SPACING'];

Object
    .keys(Components)
    .filter(compName => BLACKLIST.indexOf(compName) === -1)
    .forEach(compName => {
        const stories = storiesOf(compName, module);
        const Component = Components[compName];

        stories.addDecorator(withKnobs);
        stories.addDecorator(Decorator);

        stories.add('default', () => {
            const props = Component.propTypes;
            const options = {};
    
            Object
                .keys(props)
                .forEach(propKey => {
                    if (props[propKey] === PropTypes.bool || props[propKey] === PropTypes.bool.isRequired) {
                        options[propKey] = boolean(propKey, false);
                    }
                    else if (props[propKey] === PropTypes.string || props[propKey] === PropTypes.string.isRequired) {
                        options[propKey] = text(propKey, 'value');
                    }
                    else if (props[propKey] === PropTypes.string || props[propKey] === PropTypes.string.isRequired) {
                        options[propKey] = text(propKey, 'value');
                    }
                });

            return (
                <Component
                    {...options}
                >
                    {text('children', 'random content')}
                </Component>
            );
        });

    });