import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getLocalization from 'utils/getLocalization';
import { Localization } from 'types/localization';
import { RatesData, RatesTypes } from 'types/rates';
import Switch from 'components/UI/Switch';

import UsdFlag from 'media/svg/usd_flag.svg';
import EurFlag from 'media/svg/eur_flag.svg';
import GbpFlag from 'media/svg/gbp_flag.svg';
import RubFlag from 'media/svg/rub_flag.svg';
import Stonks from 'media/svg/stonks.svg';
import NotStonks from 'media/svg/notstonks.svg';

import { dictionary } from './dictionary';

import styles from './Exchange.module.scss';

interface ExchangeBlockProps {
  localization?: Localization;
  data: RatesData;
}

const ExchangeBlock: React.FC<ExchangeBlockProps> = ({ localization = dictionary, data }) => {
  const { locale } = useRouter();
  const { t } = getLocalization(localization, locale);

  const [rates, setRates] = useState<RatesTypes | undefined>(undefined);

  const switchItems = [
    { title: t('Cash'), value: 'cash_result' },
    { title: t('Non-cash'), value: 'non_cash_result' },

  ];

  const onSwitchChange = useCallback((value: string) => {
    // @ts-ignore
    setRates(data[value]);
  }, [data]);

  useEffect(
    () => { setRates(data.cash_result); },
    [data],
  );

  const getStonks = (delta: number) => (delta > 0 ? <Stonks /> : <NotStonks />);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.col}>
          <h2>{t('Exchange rates')}</h2>
        </div>
        <div className={styles.col}>
          <Switch
            items={switchItems}
            onChange={onSwitchChange}
          />
        </div>
      </div>
      <div className={styles.tableRow}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.header}>{t('Currency')}</th>
              <th className={styles.header}>{t('Buy')}</th>
              <th className={styles.header}>{t('Sell')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.data}>
                <div className={styles.currency}>
                  <span className={styles.flag}>
                    <UsdFlag />
                  </span>
                  <span>USD</span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[0].$.value1).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[0].$.delta1))}
                  </span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[0].$.value2).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[0].$.delta2))}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.data}>
                <div className={styles.currency}>
                  <span className={styles.flag}>
                    <EurFlag />
                  </span>
                  <span>EUR</span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[1].$.value1).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[1].$.delta1))}
                  </span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[1].$.value2).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[1].$.delta2))}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.data}>
                <div className={styles.currency}>
                  <span className={styles.flag}>
                    <RubFlag />
                  </span>
                  <span>RUB</span>
                </div>

              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[2].$.value1).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[2].$.delta1))}
                  </span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[2].$.value2).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[2].$.delta2))}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.data}>
                <div className={styles.currency}>
                  <span className={styles.flag}>
                    <GbpFlag />
                  </span>
                  <span>GBP</span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[3].$.value1).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[3].$.delta1))}
                  </span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[3].$.value2).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[3].$.delta2))}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.data}>
                <div className={styles.currency}>
                  <span className={styles.flag}>
                    <GbpFlag />
                  </span>
                  <span>CHF</span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[4].$.value1).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[4].$.delta1))}
                  </span>
                </div>
              </td>
              <td className={styles.data}>
                <div className={styles.value}>
                  <span>{rates && Number(rates.Rates[0].rate[4].$.value2).toFixed(2)}</span>
                  <span className={styles.arrow}>
                    {rates && getStonks(Number(rates.Rates[0].rate[4].$.delta2))}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeBlock;
