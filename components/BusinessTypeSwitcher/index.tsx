import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import getLocalization from 'utils/getLocalization';
import { Localization } from 'types/localization';

import DropdownPointer from 'media/svg/dropdown_pointer.svg';
import DropdownChevronDown from 'media/svg/dropdown_chevron_down.svg';

import { dictionary } from './dictionary';

import styles from './BusinessTypeSwitcher.module.scss';

interface TopMenuProps {
  isMobile: boolean;
  localization?: Localization;
  onChange: (value: 'small' | 'big') => void;
}

const BusinessTypeSwitcher: React.FC<TopMenuProps> = ({ isMobile, localization = dictionary, onChange }) => {
  const { locale } = useRouter();
  const { t } = getLocalization(localization, locale);

  const [active, setActive] = useState(t('Small business'));
  const [pointerLeftValue, setPointerLeftValue] = useState('auto');

  const titleRef = useRef<null | HTMLDivElement>(null);

  const smallClickHandler = () => {
    setActive(t('Small business'));
    onChange('small');
  };

  const bigClickHandler = () => {
    setActive(t('For medium and large businesses'));
    onChange('big');
  };

  // положение указателя у выпадающего меню
  useEffect(() => {
    if (isMobile) {
      setPointerLeftValue('calc(50% - 26.5px)');
    } else {
      setPointerLeftValue(`${Number(titleRef.current?.clientWidth) / 2 - 26.5}px`);
    }
  }, [isMobile, titleRef, active]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title} ref={titleRef}>
        <span className={styles.text}>{active}</span>
        <span className={styles.chevron}>
          <DropdownChevronDown />
        </span>
      </div>
      <div className={styles.list}>
        <div
          className={styles.pointer}
          style={{ left: pointerLeftValue }}
        >
          <DropdownPointer />
        </div>
        <div
          className={styles.item}
          onClick={smallClickHandler}
          role="presentation"
        >
          {t('Small business')}
        </div>
        <div
          className={styles.item}
          onClick={bigClickHandler}
          role="presentation"
        >
          {t('For medium and large businesses')}
        </div>
      </div>
    </div>
  );
};

export default BusinessTypeSwitcher;
