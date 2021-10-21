// Custom storybook theme
import { create } from '@storybook/theming';
import EnverusLogoWhite from '../stories/assets/enverus-logo-white.svg';
import EnverusLogoBlack from '../stories/assets/enverus-logo-black.svg';

export default create({
  base: 'dark',
  brandTitle: 'Enverus UI',
  brandUrl: 'https://enverus.com',
  brandImage: EnverusLogoWhite,

  //colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // UI
  //appBg: 'white',
  //appContentBg: 'silver',
  //appBorderColor: 'grey',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Roboto",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
  fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  //barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,
});

