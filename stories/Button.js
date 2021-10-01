import './button.css';

export const createButton = ({
  size = 'medium',
  type="link",
  label,
  onClick,
}) => {
  const buttonClassList = ['button','button-${type}', `button-${size}`,`button-${type}`].join(' ');
  return '<button class="' +buttonClassList +'">' +label +'</button>'; 
};
