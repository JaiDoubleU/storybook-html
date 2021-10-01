import '../stories/css/styleguide.css';
import { addDecorator} from '@storybook/html';
import { addons } from '@storybook/addons';
import { withCssResources } from '@storybook/addon-cssresources';

export default {
  title: "CssResources",
  parameters: {
    cssresources: [
      {
        id: `bluetheme`,
        code: `<style>body { background-color: lightblue; }</style>`,
        picked: false,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
    ],
  },
  decorators: [withCssResources],
};


export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting Started','Introduction', 'Roadmap', 'Components'],
    },
  },
};
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