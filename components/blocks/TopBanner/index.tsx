import React from 'react';

import Button from 'components/UI/Button';

import styles from './TopBanner.module.scss';

const TopBanner: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Детская карта</h2>
        <ul className={styles.list}>
          <li className={styles['list-item']}>— Бесплатная карта для детей от 6 до 13 лет</li>
          <li className={styles['list-item']}>
            — Помогает родителям контролировать траты ребёнка, отслеживать баланс,
            просматривать историю операций, настраивать лимиты на покупки
          </li>
          <li className={styles['list-item']}>— Ребёнок сможет контролировать свои расходы, научится копить и узнает больше о мире финансов</li>
        </ul>
        <div className={styles.actions}>
          <Button size="large">Заказать карту</Button>
        </div>
      </div>
      <div className={styles.image} />
    </div>
  </div>
);

export default TopBanner;
