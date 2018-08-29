import { configure } from '@storybook/react';
import '../node_modules/alegrify-ui/alegrify-ui.min.css';

function loadStories() {
  require('../stories/button.js');
  require('../stories/checkbox.js');
}

configure(loadStories, module);