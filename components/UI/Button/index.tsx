import React, {
  ReactNode, useMemo,
} from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonTypes = 'default' | 'no-bg';

type ButtonSizes = 'default' | 'large';

interface ButtonProps {
  children: ReactNode,
  type?: ButtonTypes,
  size?: ButtonSizes,
  disabled?: boolean,
  onClick?: ()=>void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'default',
  disabled,
  onClick,
}) => {
  const buttonClasses = useMemo(
    () => cn(styles.button, styles[`type_${type}`], styles[`size_${size}`]),
    [type, size],
  );

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
