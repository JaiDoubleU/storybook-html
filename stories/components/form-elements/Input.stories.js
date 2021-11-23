import './inputs.css';

import { storiesOf, addDecorator} from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

export default {
    title: 'Components/Form Elements/Inputs',
    argTypes: {
        type: {
            control: 'text'
        },
        value: {
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
};

const Template = ({
    label,
    ...args
}) => {
    return '<input type="' + args.type + '" value="' + args.value + '" placeholder="' + args.placeholder + '"/>';
};

export const TextInput = Template.bind({});
TextInput.args = {
    value: '',
    placeholder: "placeholder text",
    size: 'default',
    type: 'text',
};

export const SearchInput = Template.bind({});
SearchInput.args = {
    value: '',
    placeholder: "placeholder text",
    size: 'default',
    type: 'search',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    value: '75',
    placeholder: "placeholder text",
    size: 'default',
    type: 'number',
};

export const DateInput = Template.bind({});
DateInput.args = {
    value: '2021-12-31',
    placeholder: "",
    size: 'default',
    type: 'date',
};

export const ColorInput = Template.bind({});
ColorInput.args = {
    placeholder: "",
    value: '#eee',
    size: 'default',
    type: 'color',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    placeholder: "your.name@email.com",
    value: 'someone@domain.com',
    size: 'default',
    type: 'email',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    placeholder: "enter your password",
    value: 'password',
    size: 'default',
    type: 'password',
};

export const FileInput = Template.bind({});
FileInput.args = {
    placeholder: "",
    value: '/some/path/to/a/file.txt',
    size: 'default',
    type: 'file',
};