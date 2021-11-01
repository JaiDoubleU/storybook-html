import '../../../node_modules/sourceoftruth/css/styles.min.css';
import './alerts.css';

import { storiesOf, addDecorator} from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

export default {
    title: 'Components/Alerts',
    argTypes: {
        type: {
            control: 'text'
        },
        message: {
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
    return '<div class="alert alert-' + args.type + '">' +args.message +'</div>';
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
    value: '',
    message: "For your information...",
    size: 'default',
    type: 'info',
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
    value: '',
    message: "Woo hoo!  Something was a success!",
    size: 'default',
    type: 'success',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
    value: '2021/12/31',
    message: "Here's a warning...",
    size: 'default',
    type: 'warning',
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
    value: '2021-12-31',
    message: "That's an Error!",
    size: 'default',
    type: 'error',
};
