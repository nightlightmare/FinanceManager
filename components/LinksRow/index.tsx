import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import Link from 'next/link';

import DropdownPointer from 'media/svg/dropdown_pointer.svg';

import styles from './LinksRow.module.scss';

interface LinkDropdown {
  title: string;
  list: LinkItem[];
}

interface LinkItem {
  title: string;
  path: string;
}

interface LinksRowProps {
  links: (LinkItem | LinkDropdown)[];
  isMobile: boolean;
}

const LinksRow: React.FC<LinksRowProps> = ({
  links,
  isMobile,
}) => {
  const [dropdownListLeft, setDropdownListLeft] = useState<string | undefined>(undefined);
  const [dropdownListTop, setDropdownListTop] = useState<string | undefined>(undefined);

  const listRef = useRef<null | HTMLUListElement>(null);

  const scrollToItem: MouseEventHandler<HTMLElement> = useCallback((e) => {
    if (isMobile && listRef.current) {
      const target = e.target as HTMLElement;
      const { left, width, top } = target.getBoundingClientRect();
      const center = listRef.current.clientWidth / 2;

      // выпадающее меню
      setDropdownListTop(`${top + 47}px`);

      if ((left + 270) > (listRef.current.clientWidth - 25)) {
        setDropdownListLeft(`${listRef.current.clientWidth - 295}px`);
      } else if (left < 25) {
        setDropdownListLeft('25px');
      } else {
        setDropdownListLeft(`${left}px`);
      }

      // скролл списка
      listRef.current?.scrollTo({
        left: listRef.current.scrollLeft + left - center + width / 2,
      });
    } else {
      setDropdownListLeft(undefined);
      setDropdownListTop(undefined);
    }
  }, [isMobile, listRef]);

  useEffect(() => {
    if (!isMobile) {
      setDropdownListLeft(undefined);
      setDropdownListTop(undefined);
    }
  }, [isMobile]);

  const mainItems = useMemo(() => links.map((link) => {
    if ('path' in link) {
      return (
        <li
          className={styles.item}
          key={link.title}
          role="menuitem"
        >
          <Link href={link.path}>{link.title}</Link>
        </li>
      );
    }

    return (
      <li
        className={cn(styles.dropdown, styles.item)}
        key={link.title}
        role="menuitem"
        onClick={scrollToItem}
      >
        <div className={styles.dropdownTitle}>{link.title}</div>
        <div
          className={styles.dropdownList}
          style={{
            left: dropdownListLeft,
            top: dropdownListTop,
          }}
        >
          <div className={styles.pointer}>
            <DropdownPointer />
          </div>
          {link.list.map((nested) => (
            <div className={styles.dropdownItem} key={nested.title}>
              <Link href={nested.path}>{nested.title}</Link>
            </div>
          ))}
        </div>
      </li>
    );
  }), [dropdownListLeft, dropdownListTop, links, scrollToItem]);

  return (
    <nav className={styles.wrapper} role="navigation">
      <ul
        className={cn(styles.list, { [styles.isMobile]: isMobile })}
        role="menu"
        ref={listRef}
      >
        {mainItems}
      </ul>
    </nav>
  );
};

export default LinksRow;
