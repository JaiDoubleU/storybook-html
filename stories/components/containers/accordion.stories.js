import { addDecorator} from '@storybook/html';
import { withA11y} from '@storybook/addon-a11y';
import '../../css/styles.min.css';
import './accordion.css';
import { initAccordion } from './accordion';

addDecorator(withA11y)

export default {
    title: 'Components/Containers/Accordion',
    argTypes: {
        
    },
};

const Template = ({
    ...args
}) => {
    var theAccordion =  '<div class="accordion">Section 1</div>' +
            '<div class="panel">' +
            ' <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. < /p>' +
            '</div>' +
            '<div class="accordion">Section 2</div>' +
            '<div class="panel">' +
            '    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
            '</div>' +
            '<div class="accordion">Section 3</div>' +
            '<div class="panel">' +
            '    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
        '</div>';
     document.addEventListener('DOMContentLoaded', initAccordion);

    return theAccordion;
};

export const Accordion = Template.bind({});
Accordion.args = {

};


