import { addDecorator} from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

export default { 
    title: 'Components/Forms/Form Groups',
    argTypes: {
        type: { control: 'text' },
        value: { control: 'text' },
        label: { control: 'text'},
        required: { control: 'text' },
        icon: { control: 'text' },
        hasError: {control:'text'},
        feedbackText: { control: 'text' },
        feedbackClass: { control: 'text' },
        size: {
            control: {
                type: 'select',
                options: ['small', 'default', 'large']
            },
        },
    },
};

const FormGroupTemplate = ({
    label,
    ...args
}) => {
    var fieldHasError;
    if (args.hasError == 'true') {
        fieldHasError = 'hasError = "true"';
    }
    return '<label for="' + args.fieldName + '"class="' + args.feedbackClass + ' required="' + args.required + '">' + label + '</label>' +
        ' <input ' +fieldHasError + 'type="' + args.fieldId + '" type="' + args.type + '" value="' + args.value + '" name="' + args.fieldName + '" placeholder="' + args.placeholder + '" />' +
        ' <small class="' +args.feedbackClass +'">' +args.feedbackText +'</small>';
};

export const FormGroupDefault = FormGroupTemplate.bind({});
FormGroupDefault.args = {
    value: 'Lorem ipsum dolar sit',
    fieldId: "formGroupDefaultField",
    fieldName : "formGroupDefaultField",
    placeholder: "placeholder text",
    size: 'default',
    type: 'text',
    label: 'Field Label',
    feedbackText: 'This is some help text',
    feedbackClass:''
};

export const FormGroupRequired = FormGroupTemplate.bind({});
FormGroupRequired.args = {
    value: 'Lorem ipsum dolar sit',
    fieldId: "formGroupRequiredField",
    fieldName: "formGroupRequiredField",
    placeholder: "placeholder text",
    size: 'default',
    type: 'text',
    required: 'true',
    label: 'Field Label',
    feedbackText: 'This is some help text',
    feedbackClass: ''
};

export const FormGroupHasError = FormGroupTemplate.bind({});
FormGroupHasError.args = {
    value: 'Lorem ipsum dolar sit',
    fieldId: "formGroupRequiredField",
    fieldName: "formGroupRequiredField",
    placeholder: "placeholder text",
    size: 'default',
    type: 'text',
    required: 'true',
    label: 'Field Label',
    hasError: 'true',
    feedbackText: 'This is some help text',
    feedbackClass: 'text-error'
};
