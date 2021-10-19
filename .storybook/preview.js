import '../stories/css/styleguide.css';
import '../node_modules/@fortawesome/fontawesome-pro/css/all.min.css';
import '../node_modules/sourceoftruth/css/index.css';

import { Loader } from '@storybook/components';

import { addDecorator} from '@storybook/html';
import { addons } from '@storybook/addons';
import { withCssResources } from '@storybook/addon-cssresources';

export const parameters = {
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
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   options: {
//     // storySort: {
//     //   // method: '',
//     //   // locales: 'en-US', 
//     //   order: ['Introduction','Roadmap',"GettingStarted","Components"],
//     // },
//     storySort: (a, b) =>
//      a[1].id === b[1].id ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: false }),
//   },
// }