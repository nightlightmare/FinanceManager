import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import getLocalization from 'utils/getLocalization';
import { Localization } from 'types/localization';
import { RatesData } from 'types/rates';

import Link from 'next/link';
import { dictionary } from './dictionary';

import styles from './Exchange.module.scss';

interface ExchangeBlockProps {
  localization?: Localization;
  data: RatesData;
}

const ExchangeBlock: React.FC<ExchangeBlockProps> = ({ localization = dictionary, data }) => {
  const { locale } = useRouter();
  const { t } = getLocalization(localization, locale);

  const [rates, setRates] = useState<RatesData | undefined>(undefined);

  // данные получаем со страницы, чтобы не мешать гидрированию, отображаем котировки после рендеринга компонента
  useEffect(() => { setRates(data); }, [data]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('Exchange rates')}</h2>

          <div className={styles.rates}>
            <div className={styles.cash}>Безналичный расчет</div>
            <div className={styles.transfer}>Наличный расчет</div>
            <p className={cn(styles.th, styles.currency)}>Валюта</p>
            <p className={cn(styles.th, styles.buy)}>Курс покупки</p>
            <p className={styles.th}>Курс продажи</p>
            <p className={cn(styles.th, styles.buy)}>Курс покупки</p>
            <p className={styles.th}>Курс продажи</p>
            <p className={cn(styles.currency, styles.odd)}>
              <b>Российский рубль</b>
              {' '}
              (RUB)
            </p>
            <p className={cn(styles.buy, styles.odd)}>
              {rates && Number(rates.non_cash_result.Rates[0].rate[2].$.value1).toFixed(4)}
            </p>
            <p className={styles.odd}>
              {rates && Number(rates.non_cash_result.Rates[0].rate[2].$.value2).toFixed(4)}
            </p>
            <p className={cn(styles.buy, styles.odd)}>
              {rates && Number(rates.cash_result.Rates[0].rate[2].$.value1).toFixed(4)}
            </p>
            <p className={styles.odd}>
              {rates && Number(rates.cash_result.Rates[0].rate[2].$.value2).toFixed(4)}
            </p>
            <p className={styles.currency}>
              <b>Доллар США</b>
              {' '}
              (USD)
            </p>
            <p className={styles.buy}>
              {rates && Number(rates.non_cash_result.Rates[0].rate[0].$.value1).toFixed(4)}
            </p>
            <p>
              {rates && Number(rates.non_cash_result.Rates[0].rate[0].$.value2).toFixed(4)}
            </p>
            <p className={styles.buy}>
              {rates && Number(rates.cash_result.Rates[0].rate[0].$.value1).toFixed(4)}
            </p>
            <p>
              {rates && Number(rates.cash_result.Rates[0].rate[0].$.value2).toFixed(4)}
            </p>
            <p className={cn(styles.currency, styles.odd)}>
              <b>Евро</b>
              {' '}
              (EUR)
            </p>
            <p className={cn(styles.buy, styles.odd)}>
              {rates && Number(rates.non_cash_result.Rates[0].rate[1].$.value1).toFixed(4)}
            </p>
            <p className={styles.odd}>
              {rates && Number(rates.non_cash_result.Rates[0].rate[1].$.value2).toFixed(4)}
            </p>
            <p className={cn(styles.buy, styles.odd)}>
              {rates && Number(rates.cash_result.Rates[0].rate[1].$.value1).toFixed(4)}
            </p>
            <p className={styles.odd}>
              {rates && Number(rates.cash_result.Rates[0].rate[1].$.value2).toFixed(4)}
            </p>
            <p className={styles.currency}>
              <b>Английский фунт стерлингов</b>
              {' '}
              (GBP)
            </p>
            <p className={styles.buy}>
              {rates && Number(rates.non_cash_result.Rates[0].rate[3].$.value1).toFixed(4)}
            </p>
            <p>
              {rates && Number(rates.non_cash_result.Rates[0].rate[3].$.value2).toFixed(4)}
            </p>
            <p className={styles.buy}>
              {rates && Number(rates.cash_result.Rates[0].rate[3].$.value1).toFixed(4)}
            </p>
            <p>
              {rates && Number(rates.cash_result.Rates[0].rate[3].$.value2).toFixed(4)}
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/">{t('Buying and selling currency')}</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExchangeBlock;
