import './labels.css';

import { storiesOf, addDecorator} from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

export default {
    title: 'Components/Form Elements/Labels',
    argTypes: {
        required: {
            control: 'boolean'
        },
        value: {
            control: 'text'
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
    return '<label required="' + args.required + '">' + args.value + '</label>';
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
    value: 'Form Label',
    required: true,
};

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
    value: 'Form Label',
    required: false,
};
