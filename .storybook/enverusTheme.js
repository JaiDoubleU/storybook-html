import { create } from '@storybook/theming';
import EnverusLogoWhite from '../stories/assets/enverus-logo-white.svg';
import EnverusLogoBlack from '../stories/assets/enverus-logo-black.svg';

export default create({
  base: 'dark',
  brandTitle: 'Enverus UI',
  brandUrl: 'https://enverus.com',
  brandImage: EnverusLogoWhite,
});

