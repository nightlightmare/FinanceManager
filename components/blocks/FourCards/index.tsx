import React from 'react';
import Link from 'next/link';

import AccountIcon from 'media/svg/card_account.svg';
import CardIcon from 'media/svg/card_card.svg';
import DepositIcon from 'media/svg/card_deposit.svg';
import TransfersIcon from 'media/svg/card_transfers.svg';

import styles from './FourCards.module.scss';

const FourCards: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.content}>

        <ul className={styles.list}>
          <Link href="/">
            <li className={styles['list-item']}>
              <h3 className={styles.title}>Банковский счет</h3>
              <p className={styles.text}>Откройте счет в драмах или иностранной валюте</p>
              <div className={styles.icon}>
                <AccountIcon />
              </div>
            </li>
          </Link>
          <Link href="/">
            <li className={styles['list-item']}>
              <h3 className={styles.title}>Денежные переводы</h3>
              <p className={styles.text}>Переводы в Армении в&nbsp;течении одного дня</p>
              <div className={styles.icon}>
                <CardIcon />
              </div>
            </li>
          </Link>
          <Link href="/">
            <li className={styles['list-item']}>
              <h3 className={styles.title}>Накопительный вклад</h3>
              <p className={styles.text}>Более 9% годовых без дополнительных условий</p>
              <div className={styles.icon}>
                <DepositIcon />
              </div>
            </li>
          </Link>
          <Link href="/">
            <li className={styles['list-item']}>
              <h3 className={styles.title}>Банковские карты</h3>
              <p className={styles.text}>VISA и Mastercard для частных лиц и бизнеса</p>
              <div className={styles.icon}>
                <TransfersIcon />
              </div>
            </li>
          </Link>
        </ul>

      </div>
    </div>
  </div>
);

export default FourCards;
