import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from '../lib/button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Button
        disabled={boolean('disabled', false)}
        full={boolean('full', false)}
    >
        {text('children', 'Button text')}
    </Button>
  )) 
  .add('primary', () => (
    <Button
        primary
        disabled={boolean('disabled', false)}
        full={boolean('full', false)}
    >
        {text('children', 'Button text')}
    </Button>
  ));