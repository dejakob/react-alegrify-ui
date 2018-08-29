import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from '../lib/button';
import Decorator from './decorator';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .addDecorator(Decorator)
  .add('default', () => (
    <Button
        disabled={boolean('disabled', false)}
        full={boolean('full', false)}
        primary={boolean('primary', false)}
    >
        {text('children', 'Button text')}
    </Button>
  ));