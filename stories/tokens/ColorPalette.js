import '../components/buttons/button.css';
import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs/';
import { addDecorator } from '@storybook/html';

import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

// export const createColorPalette = ({}) => {
//   return '<ColorPalette>' +
//     ' <ColorItem title="theme.branding.primary" subtitle="Enverus Green" colors={[color.branding.primary]} />' +
//     ' <ColorItem title="theme.branding.secondary" subtitle="Enverus Light Green" colors={[color.branding.secondary]} />' +
//     ' <ColorItem title="theme.branding.tertiary" subtitle="Enverus Grey" colors={[color.branding.tertiary]} />' +
//     ' <ColorItem title="theme.functional.success" subtitle="Green" colors={[color.functional.success]} />' +
//     ' <ColorItem title="theme.functional.warning" subtitle="Ochre" colors={[color.functional.warning]} />' +
//     ' <ColorItem title="theme.functional.error" subtitle="Red" colors={[color.functional.error]} />' +
//     ' <ColorItem title="theme.functional.info" subtitle="Orange" colors={[color.functional.info]} />' +
//     ' <ColorItem title="theme.color.gold" subtitle="Gold" colors={[color.gold]} />' +
//     ' <ColorItem title="theme.color.seafoam" subtitle="Seafoam" colors={[color.seafoam]} />' +
//     ' <ColorItem title="theme.color.purple" subtitle="Purple" colors={[color.purple]} />' +
//     ' <ColorItem title="theme.color.ultraviolet" subtitle="Ultraviolet" colors={[color.ultraviolet]} />' +
//     ' <ColorItem  title="Monochrome" colors={[  color.darkest, color.darker, color.dark, color.mediumdark, color.medium, color.mediumlight, color.light, color.lighter,  color.lightest,    ]} />' +
//     ' </ColorPalette>';
// };
