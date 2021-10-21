import '../stories/css/styleguide.css';
import '../node_modules/sourceoftruth/css/index.css';

import { addons } from '@storybook/addons';
import { withCssResources } from '@storybook/addon-cssresources';
import enverusTheme from './enverusTheme';

addons.setConfig({
  theme: enverusTheme,
  showPanel: true,
  panelPosition: "bottom"
});

export const parameters = {
  addons: {
    showPanel: true,
    panelPosition: "bottom",
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#57535A',
      },
      {
        name: 'light',
        value: '#eeeeee',
      },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting Started','Tokens','Introduction', 'Roadmap', 'Components'],
    },
  },
};

export const decorators = [withCssResources]