import { storiesOf, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

export default {
  title: 'Components/Buttons',
  argTypes: {
    label: { control: 'text' },
    type: {control: 'text'},
    size: {
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
    icon: {control: 'text' }
  },
};

const Template = ({ label, ...args }) => {
    return '<button class="button button-' +args.type +' button-' +args.size +'">' +label +'</button>'; 
};

export const Primary = Template.bind({}) ;
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
