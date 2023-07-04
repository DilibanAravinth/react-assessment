import React from 'react';

const Button = ({ styles, content, callback = null }) => {
  const { type, fontSize, fontWeight, paddingX, paddingY, borderRounded } =
    styles;

  let butonTypeStyles = {
    primary: 'bg-primary text-t_white',
    secondary: 'bg-c_white text-primary border-solid border-primary-border',
  }[type];
  let classNames = ` ${butonTypeStyles} ${borderRounded} ${fontSize}${fontWeight} ${paddingX} ${paddingY}`;

  return (
    <button className={classNames} onClick={callback}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  styles: {
    type: 'primary',
    fontSize: 'text-base',
    fontWeight: 'font-medium',
    paddingX: 'px-4',
    paddingY: 'py-2',
    borderRounded: 'rounded-md',
  },
  content: 'Button',
  callback: () => console.log('Button Clicked'),
};

export default Button;
