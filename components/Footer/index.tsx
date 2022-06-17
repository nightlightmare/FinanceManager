import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import getLocalization from 'utils/getLocalization';
import { Localization } from 'types/localization';
import { dictionary } from 'components/TopMenu/dictionary';

import MobileApp from 'media/svg/mobile_app.svg';
import FacebookIcon from 'media/svg/social/facebook.svg';
import InstagramIcon from 'media/svg/social/instagram.svg';

import styles from './Footer.module.scss';

interface FooterProps {
  localization?: Localization;
}

const Footer: React.FC<FooterProps> = ({ localization = dictionary }) => {
  const { locale } = useRouter();
  const { t } = getLocalization(localization, locale);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.top}>

          <a href="tel:+37410592020" className={styles.phone}>
            <div className={styles['phone-number']}>+374&nbsp;(10)&nbsp;59&nbsp;20&nbsp;20</div>
            <div className={styles['working-hours']}>{t('Working hours from 9:00 to 18:00')}</div>
          </a>

          <a href="https://google.com" className={styles.app}>
            <MobileApp />
            <span>{t('Mobile app')}</span>
          </a>

        </div>

        <div className={styles.links}>
          <div className={styles.group}>
            <h4 className={styles.title}>{t('About bank')}</h4>
            <ul className={styles.list}>
              <li className={styles['list-item']}><Link href="/">{t('General information')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Bank activity')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Structure')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Shareholders and investors')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Requisites')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Reports')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Legal documents')}</Link></li>
            </ul>
          </div>
          <div className={styles.group}>
            <h4 className={styles.title}>{t('Individuals')}</h4>
            <ul className={styles.list}>
              <li className={styles['list-item']}><Link href="/">{t('Accounts')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Cards')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Loans')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Transfers')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Deposits')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Investment')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Individual safe boxes')}</Link></li>
            </ul>
          </div>
          <div className={styles.group}>
            <h4 className={styles.title}>{t('Business')}</h4>
            <ul className={styles.list}>
              <li className={styles['list-item']}><Link href="/">{t('Accounts')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Cards')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Loans')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Individual safe boxes')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Payroll projects')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Operations with securities')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Commercial acquiring')}</Link></li>
            </ul>
          </div>
          <div className={styles.group}>
            <h4 className={styles.title}>{t('Help for clients')}</h4>
            <ul className={styles.list}>
              <li className={styles['list-item']}><Link href="/">{t('Offices and ATMs')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Mobile banking')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Internet banking')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Jobs')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('News')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Requisites')}</Link></li>
              <li className={styles['list-item']}><Link href="/">{t('Sitemap')}</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>

          <small className={styles.license}>
            <div>
              &copy;
              {` ${t('2022 "Armbusinessbank" CJSC')}`}
            </div>
            <div>{t('License of the Central Bank of Armenia No. 40 dated 10.12.1991')}</div>
          </small>

          <ul className={styles.social}>
            <li className={styles.icon}>
              <a
                href="https://www.facebook.com/armbusinessbankofficial"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li className={styles.icon}>
              <a
                href="https://www.instagram.com/armbusinessbank_official"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default Footer;
