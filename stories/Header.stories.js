import { createHeader } from './Header';

import { withCssResources } from '@storybook/addon-cssresources';

// export const defaultView = () => `<div > Hi There </div>`;

export default {
  title: 'Components/Header',
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
  // parameters: {
  //   cssresources: [
  //     {
  //       id: `Light`,
  //       code: '<header> <div  class="wrapper">logo </div></header>',
  //       picked: false,
  //       hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
  //     },
  //   ],
  // },
  // decorators: [withCssResources],
};

const Template = (args) => createHeader(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

