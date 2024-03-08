import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css'; // Подключение модуля стилей

const Button = ({ icon, text, callback, style = null, variant, externalStyles, styleName }) => {
  const buttonClasses = clsx({
    [css.button]: true,
    [css.secondaryButton]: variant === 'secondary',
    styleName: true,
  });

  const combinedStyles = { ...style, ...externalStyles };

  return (
    <button onClick={callback} className={buttonClasses} style={combinedStyles}>
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
