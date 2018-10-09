import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf, setAddon } from '@storybook/react';
import * as Components from '../lib';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import Decorator from './decorator';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const BLACKLIST = ['COLORS', 'MEDIA', 'SPACING'];

Object
    .keys(Components)
    .filter(compName => BLACKLIST.indexOf(compName) === -1)
    .forEach(compName => {
        const stories = storiesOf(compName, module);
        const Component = Components[compName];

        stories.addDecorator(withKnobs);
        stories.addDecorator(Decorator);

        stories.addWithJSX('default', () => {
            const props = Component.propTypes;
            const options = {};
    
            Object
                .keys(props)
                .forEach(propKey => {
                    const content = Component.propExamples && Component.propExamples[propKey];

                    if (props[propKey] === PropTypes.bool || props[propKey] === PropTypes.bool.isRequired) {
                        options[propKey] = boolean(propKey, content || false);
                    }
                    else if (props[propKey] === PropTypes.string || props[propKey] === PropTypes.string.isRequired) {
                        options[propKey] = text(propKey, content || propKey);
                    }
                    else if (props[propKey] === PropTypes.number || props[propKey] === PropTypes.number.isRequired) {
                        options[propKey] = number(propKey, content || 0);
                    }
                    else if (props[propKey] === PropTypes.func || props[propKey] === PropTypes.func.isRequired) {
                        options[propKey] = action(propKey);
                    }
                    else {
                        options[propKey] = content || null;
                    }
                });

            const children = props.children ?
                text('children', Component.propExamples && Component.propExamples.children || 'random content'):
                null;

            return (
                <Component
                    {...options}
                >
                    {children}
                </Component>
            );
        });

    });