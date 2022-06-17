import React, { useMemo, useRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useDropdown from 'hooks/useDropdown';

import MenuLanguage from 'media/svg/menu_language.svg';

import styles from './LaguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { route } = useRouter();
  const dropdownRef = useRef(null);
  const { isDropdownOpen } = useDropdown(dropdownRef);

  const buttonClasses = useMemo(
    () => cn(styles.button, { [styles.open]: isDropdownOpen }),
    [isDropdownOpen],
  );

  const listClasses = useMemo(
    () => cn(styles.list, { [styles.open]: isDropdownOpen }),
    [isDropdownOpen],
  );

  return (
    <div className={styles.wrapper}>
      <div className={buttonClasses} ref={dropdownRef}>
        <MenuLanguage />
      </div>
      <div className={listClasses}>
        <div className={styles.item}>
          <Link href={route} locale="am">AM</Link>
        </div>
        <div className={styles.item}>
          <Link href={route} locale="ru">RU</Link>
        </div>
        <div className={styles.item}>
          <Link href={route} locale="en">ENG</Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
