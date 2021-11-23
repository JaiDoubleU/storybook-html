// import '../components/form-elements/button.css';
import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs/';
import { addDecorator } from '@storybook/html';

import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs'

addDecorator(withA11y);
addDecorator(withDesign);

export default {
  title: 'Color Palette',
  component: ColorPalette,
    decorators: [withDesign],
    parameters: [{
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
        },
    }]
}




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
