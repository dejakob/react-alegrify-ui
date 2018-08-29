import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../lib/checkbox';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories
  .addDecorator((story) => (
    <main class="alegrify-main">
      <article class="alegrify-article">
        <div>
            {story()}
        </div>
      </article>
    </main>
  ))
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