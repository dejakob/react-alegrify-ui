import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../lib/checkbox';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox
        id="checkbox-1"
        name="checkbox-1"
    >
        select me
    </Checkbox>
  ));