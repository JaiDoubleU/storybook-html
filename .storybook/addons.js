import '@storybook/addon-a11y/register';
// import '@storybook/addon-options/register';
import { configure, addDecorator, storiesOf } from '@storybook/html';
import { addons } from '@storybook/addons';
import enverusTheme from './enverusTheme';
 
// global
addons.setConfig({
  theme: enverusTheme,
  showPanel: true,
  panelPosition: "bottom"
});