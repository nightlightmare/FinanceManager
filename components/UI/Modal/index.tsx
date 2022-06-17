import Portal from 'HOC/Portal';
import React, { ReactNode } from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  title: ReactNode,
  actions: ReactNode,
  children: ReactNode,
}

const Modal: React.FC<ModalProps> = ({
  title,
  actions,
  children,
}) => (
  <Portal>
    <div
      className={styles.wrapper}
      role="presentation"
    >
      <div className={styles.body}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.actions}>
          {actions}
        </div>
      </div>
    </div>
  </Portal>
);

export default Modal;
