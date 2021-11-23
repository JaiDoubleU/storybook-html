import '../../../node_modules/sourceoftruth/css/styles.min.css';

import {
  addDecorator
} from '@storybook/html';
import {
  withDesign
} from 'storybook-addon-designs'

import {
  withA11y
} from '@storybook/addon-a11y';
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
        options: ['small', 'default', 'large']
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
  size: 'default',
  variant: 'primary', 
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
  label: 'Button',
  variant: 'secondary',
  size: 'default',
};

export const LinkBtn = Template.bind({});
LinkBtn.args = {
  label: 'Button',
  variant: 'link',
  size: 'default',
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
  variant: 'danger',
  size: 'default',
};

export const YellowBtn = Template.bind({});
YellowBtn.args = {
  label: 'Button',
  variant: 'warning',
  size: 'default',
};