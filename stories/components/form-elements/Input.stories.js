import { storiesOf, addDecorator} from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import '../../css/styles.min.css';

addDecorator(withA11y) 

export default {
    title: 'Components/Form Elements/Inputs',
    parameters: {
        a11y: {
            config: {
                rules: [{
                    id: 'label',
                    enabled: true,
                    reviewOnFail: true
                }],
            },
        },
    },
    argTypes: {
        type: { control: 'text'  },
        id: {control: 'text'},
        value: { control: 'text' },
        feedbackClass: { control: 'text'},
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            },
        },
        icon: { control: 'text'  }
    },
};

const Template = ({
    label,
    ...args
}) => {
    return '<input  has-' + args.feedbackClass + ' class="input-' + args.size + '" type="' + args.type + '" value="' + args.value + '" placeholder="' + args.placeholder + '"/>';
};

export const TextInput = Template.bind({});
TextInput.args = {
    value: '',
    placeholder: "placeholder text",
    size: 'medium',
    type: 'text',
    feedbackClass: ''
};

export const LargeInput = Template.bind({});
LargeInput.args = {
    value: '',
    placeholder: "placeholder text",
    size: 'large',
    type: 'text',
    feedbackClass: ''
};

export const SmallInput = Template.bind({});
SmallInput.args = {
    value: '',
    placeholder: "placeholder text",
    size: 'small',
    type: 'text',
    feedbackClass: '',
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
    value: 'This field has an error',
    placeholder: "placeholder text",
    size: 'medium',
    type: 'text',
    feedbackClass: 'error',
};

export const SearchInput = Template.bind({});
SearchInput.args = {
    value: '',
    placeholder: "placeholder text",
    size: 'medium',
    type: 'search',
    feedbackClass: '',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    value: '75',
    placeholder: "placeholder text",
    size: 'medium',
    type: 'number',
    feedbackClass: '',
};

export const DateInput = Template.bind({});
DateInput.args = {
    value: '2021-12-31',
    placeholder: "",
    size: 'medium',
    type: 'date',
    feedbackClass: '',
};

export const ColorInput = Template.bind({});
ColorInput.args = {
    placeholder: "",
    value: '#eee',
    size: 'medium',
    type: 'color',
    feedbackClass: '',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    placeholder: "your.name@email.com",
    value: 'someone@domain.com',
    size: 'medium',
    type: 'email',
    feedbackClass: '',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    placeholder: "enter your password",
    value: 'password',
    size: 'medium',
    type: 'password',
    feedbackClass: '',
};

export const FileInput = Template.bind({});
FileInput.args = {
    placeholder: "",
    value: '/some/path/to/a/file.txt',
    size: 'medium',
    type: 'file',
    feedbackClass: '',
};