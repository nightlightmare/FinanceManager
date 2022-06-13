import React, { ReactNode, useMemo } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonTypes = 'default' | 'no-bg';

interface ButtonProps {
  children: ReactNode,
  type?: ButtonTypes
}

const Button: React.FC<ButtonProps> = ({ children, type = 'default' }) => {
  const buttonClasses = useMemo(
    () => cn(styles.button, styles[`type_${type}`]),
    [type],
  );

  return <div className={buttonClasses}>{children}</div>;
};

export default Button;
