import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import getLocalization from 'utils/getLocalization';
import { Localization } from 'types/localization';

import LogoRu from 'media/svg/logo_ru.svg';
import LogoEn from 'media/svg/logo_en.svg';
import LogoAm from 'media/svg/logo_am.svg';
import MenuAccount from 'media/svg/menu_account.svg';

import Button from 'components/UI/Button';
import LanguageSwitcher from 'components/LaguageSwitcher';
import LinksRow from 'components/LinksRow';

// Словарь с переводами для отдельных компонентов делать лучше отдельно
// Для страниц - в папке localization, сохраняя структуру файлов/папок
import { dictionary } from './dictionary';

import styles from './TopMenu.module.scss';

interface TopMenuProps {
  localization?: Localization;
}

const TopMenu: React.FC<TopMenuProps> = ({ localization = dictionary }) => {
  const { locale, route } = useRouter();
  const { t } = getLocalization(localization, locale);

  const [isMobile, setIsMobile] = useState(false);

  // Определяем, выбран раздел для бизнеса или для частных лиц
  const isBusiness = useMemo(() => route.includes('business'), [route]);

  const individualsClasses = useMemo(
    () => cn(styles.section, { [styles.active]: !isBusiness }),
    [isBusiness],
  );

  const businessClasses = useMemo(
    () => cn(styles.section, { [styles.active]: isBusiness }),
    [isBusiness],
  );

  // Меняем лого в шапке в зависимости от выбранного языка
  const logoIcon = useMemo(() => {
    if (locale === 'en') return <LogoEn />;

    if (locale === 'ru') return <LogoRu />;

    return <LogoAm />;
  }, [locale]);

  // Структура для ссылок в нижней строке шапки
  const getBottomRow = useMemo(() => {
    if (isBusiness) {
      return (
        <div className={styles.scroll}>
          <LinksRow
            links={[
              { title: t('Accounts'), path: '/business/accounts' },
              {
                title: t('Loans'),
                list: [
                  { title: t('Lending'), path: '/business/distance-banking' },
                  { title: t('Overdrafts'), path: '/business/distance-banking' },
                ],
              },
              { title: t('Cards'), path: '/business/cards' },
              {
                title: t('Trade Finance'),
                list: [
                  { title: t('Bank guarantee'), path: '/business/distance-banking' },
                  { title: t('Collection'), path: '/business/distance-banking' },
                  { title: t('Documentary letter of credit'), path: '/business/distance-banking' },
                  { title: t('Factoring'), path: '/business/distance-banking' },
                ],
              },
              {
                title: t('Other'),
                list: [
                  { title: t('Distance Banking'), path: '/business/distance-banking' },
                  { title: t('Individual safe boxes'), path: '/business/safe-boxes' },
                  { title: t('Payroll projects'), path: '/business/accumulative-pension-system' },
                  { title: t('Operations with securities'), path: '/business/insurance' },
                  { title: t('Commercial acquiring'), path: '/business/special-offers' },
                  { title: t('Insurance'), path: '/business/utility' },
                ],
              },
            ]}
            isMobile={isMobile}
          />
        </div>
      );
    }

    return (
      <LinksRow
        links={[
          { title: t('Accounts'), path: '/accounts' },
          { title: t('Cards'), path: '/cards' },
          { title: t('Loans'), path: '/loans' },
          { title: t('Transfers'), path: '/transfers' },
          { title: t('Deposits'), path: '/deposits' },
          { title: t('Investment'), path: '/investment' },
          {
            title: t('Other'),
            list: [
              { title: t('Distance Banking'), path: '/distance-banking' },
              { title: t('Individual safe boxes'), path: '/safe-boxes' },
              { title: t('Accumulative pension system'), path: '/accumulative-pension-system' },
              { title: t('Insurance'), path: '/insurance' },
              { title: t('Special offers'), path: '/special-offers' },
              { title: t('Utility and other payments'), path: '/utility' },
              { title: t('Precious metals'), path: '/precious-metals' },
            ],
          },
        ]}
        isMobile={isMobile}
      />
    );
  }, [
    isBusiness,
    t,
    isMobile,
  ]);

  const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  // Определяем, нужно ли включать "мобильное" отображение, проверяя, ширина экрана меньше 884px или нет (значение получено эмпирически и может изменяться)
  useEffect(() => {
    let timeoutId: undefined | NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMobile(getWidth() <= 884), 150);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.addEventListener('load', handleResize);
      window.addEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <a href="https://www.armbusinessbank.am/" title="Armbusinessbank">
              {logoIcon}
            </a>
          </div>
          <div className={styles.sections}>
            <div className={individualsClasses}>
              <Link href="/">
                {t('Individuals')}
              </Link>
            </div>
            <div className={businessClasses}>
              <Link href="/business">
                {t('Business')}
              </Link>
            </div>
          </div>
          <div className={styles.spacer} />
          <div className={styles.actions}>
            <div className={styles.action}>
              <LanguageSwitcher />
            </div>
            <div className={cn(styles.action, styles.mobile, styles.account)}>
              <MenuAccount />
            </div>
            <div className={cn(styles.action, styles.desktop)}>
              <Button>
                {t('Become a client')}
              </Button>
            </div>
            <div className={cn(styles.action, styles.desktop)}>
              <Button type="no-bg">
                {t('Log in')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {getBottomRow}
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
