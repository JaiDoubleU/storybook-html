// import '../../../node_modules/sourceoftruth/css/styles.min.css';
import '../../css/styles.min.css';

import {  addDecorator } from '@storybook/html';
import {  withDesign } from 'storybook-addon-designs'
import { withA11y } from '@storybook/addon-a11y';
import { cssresources } from '@storybook/addon-cssresources';


addDecorator(withA11y)


export default {
  title: 'Components/Form Elements/Buttons',
  argTypes: {
    label: {
      control: 'text'
    },
    variant: {
      control: 'text'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
    },
    icon: {
      control: 'text'
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rrwf9Uaco4wEK1cMQALPpi/?node-id=44%3A331',
    },
  }
};

const Template = ({ label, ...args }) => {
  return '<button '
    + 'class="button button-' + args.variant
    + ' button-' + args.size + '">' + label
    + '</button>';
};

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  label: 'Button',
  size: 'medium',
  variant: 'primary', 
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
  label: 'Button',
  variant: 'secondary',
  size: 'medium',
};

export const LinkBtn = Template.bind({});
LinkBtn.args = {
  label: 'Button',
  variant: 'link',
  size: 'medium',
};
LinkBtn.parameters = {
  a11y: {
    config: {
      rules: [{
        id: 'color-contrast',
        enabled: true,
        reviewOnFail: true
      }],
    },
  },
};

export const ErrorBtn = Template.bind({});
ErrorBtn.args = {
  label: 'Button',
  variant: 'error',
  size: 'medium',
};

export const YellowBtn = Template.bind({});
YellowBtn.args = {
  label: 'Button',
  variant: 'warning',
  size: 'medium',
};

export const smallBtn = Template.bind({});
smallBtn.args = {
  label: 'Button',
  variant: 'secondary',
  size: 'small',
};

export const largeBtn = Template.bind({});
largeBtn.args = {
  label: 'Button',
  variant: 'secondary',
  size: 'large',
};