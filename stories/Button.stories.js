import { createButton } from './Button';
import { storiesOf, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';


addDecorator(withA11y)

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    type: {control: 'text'},
    size: {
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'default',
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary',
  size: 'default',
};

export const Link = Template.bind({});
Link.args = {
  label: 'Button',
  type: 'link',
  size: 'default'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  type: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  type: 'secondary'
};
