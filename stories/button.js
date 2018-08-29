import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from '../lib/button';

const stories = storiesOf('Button', module);

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