import React, { MouseEventHandler, useState } from 'react';
import cn from 'classnames';

import styles from './Switch.module.scss';

type SwitchItemsType = {
  title: string;
  value: string;
};

interface SwitchProps {
  items: SwitchItemsType[];
  onChange: (value: string) => void;
}

const Switch: React.FC<SwitchProps> = ({ items, onChange }) => {
  const [active, setActive] = useState(0);

  // при клике делаем переключаем состояние
  const onClickHandler: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as HTMLElement;
    setActive(Number(target.getAttribute('data-index')));
    onChange(String(target.getAttribute('data-value')));
  };

  return (
    <div
      className={styles.switch}
      style={{ gridTemplateColumns: '1fr '.repeat(items.length) }}
    >
      <div
        className={styles.pointer}
        style={{
          width: `calc((100% - 4px) / ${items.length})`,
          left: `calc(2px + ((100% - 4px) / ${items.length}) * ${active})`,
        }}
      />
      {items.map(
        (item, index) => (
          <div
            className={cn(styles.item, { [styles.active]: active === index })}
            key={item.value}
            role="presentation"
            onClick={onClickHandler}
            data-value={item.value}
            data-index={index}
          >
            {item.title}
          </div>
        ),
      )}
    </div>
  );
};

export default Switch;
