import '../stories/css/styleguide.css';
import '../stories/css/styles.min.css';
// import '../node_modules/sourceoftruth/css/styles.min.css';

import { addons } from '@storybook/addons';
import { withCssResources } from '@storybook/addon-cssresources';
import enverusTheme from './enverusTheme';
 
// global
addons.setConfig({
  initialActive: 'sidebar',
  theme: enverusTheme,
  showPanel: true,
  showNav: true,
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
  html: {
    prettier: {
        "arrowParens": "always",
        "bracketSameLine": true,
        "bracketSpacing": true,
        "embeddedLanguageFormatting": "auto",
        "htmlWhitespaceSensitivity": "ignore",
        "insertPragma": false,
        "jsxSingleQuote": false,
        "printWidth": 144,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "rangeStart": 0,
        "requirePragma": false,
        "semi": true,
        "singleQuote": false,
        "tabWidth": 4,
        "trailingComma": "es5",
        "useTabs": false,
        "vueIndentScriptAndStyle": false,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Roadmap', 'Getting Started','Guidelines',  'Tokens', 'Components'],
    },
  },
};

export const decorators = [withCssResources]