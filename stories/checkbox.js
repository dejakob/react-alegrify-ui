import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../lib/checkbox';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Decorator from './decorator';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories
  .addDecorator(Decorator)
  .add('default', () => (
    <Checkbox
        id="checkbox-1"
        name="checkbox-1"
        disabled={boolean('disabled', false)}
        checked={boolean('checked', false)}
    >
        {text('children', 'Check me!')}
    </Checkbox>
  ));