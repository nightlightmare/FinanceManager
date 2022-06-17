import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './TwoCards.module.scss';

const TwoCards: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={cn(styles['list-item'], styles.client)}>
            <h3 className={styles.title}>Станьте клиентом банка</h3>
            <p className={styles.text}>Бесплатное открытие счета, обслуживание, онлайн-банк и мобильное приложение</p>
            <div className={styles.actions}>
              <Link href="/">Стать клиентом</Link>
            </div>
          </li>
          <li className={cn(styles['list-item'], styles.credit)}>
            <h3 className={styles.title}>Выберите новую карту</h3>
            <p className={styles.text}>
              Более десяти видов дебетовых и кредитных карт VISA и MasterCard,
              а также пенсионная карта ArCa
            </p>
            <div className={styles.actions}>
              <Link href="/">Оформить кредит</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default TwoCards;
