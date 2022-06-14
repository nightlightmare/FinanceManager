import React, {
  FocusEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Portal from 'HOC/Portal';

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
  const [hoverKey, setHoverKey] = useState('');

  const listRef = useRef<null | HTMLUListElement>(null);

  const scrollToItem: MouseEventHandler<HTMLElement> = useCallback((e) => {
    if (isMobile && listRef.current) {
      const target = e.target as HTMLElement;
      const { left, width } = target.getBoundingClientRect();
      const center = listRef.current.clientWidth / 2;

      // скролл списка
      listRef.current?.scrollTo({
        left: listRef.current.scrollLeft + left - center + width / 2,
      });
    }
  }, [isMobile, listRef]);

  const onEnterHandler:MouseEventHandler<HTMLLIElement> = (event) => {
    const target = event.currentTarget as HTMLElement;
    setHoverKey(String(target.getAttribute('data-value')));
  };

  const onFocusHandler:FocusEventHandler<HTMLLIElement> = (event) => {
    const target = event.currentTarget as HTMLElement;
    setHoverKey(String(target.getAttribute('data-value')));
  };

  const onLeaveHandler:MouseEventHandler<HTMLLIElement> = () => {
    setHoverKey('');
  };

  const onBlurHandler:FocusEventHandler<HTMLLIElement> = () => {
    setHoverKey('');
  };

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
        onFocus={onFocusHandler}
        onMouseEnter={onEnterHandler}
        onBlur={onBlurHandler}
        onMouseLeave={onLeaveHandler}
        data-value={link.title}
      >
        <div className={styles.pointer}>
          <DropdownPointer />
        </div>
        <div className={styles.dropdownTitle}>{link.title}</div>
        <Portal>
          <div
            className={cn(styles.dropdownList, { [styles.hover]: hoverKey === link.title })}
          >
            <div className={styles.container}>
              {link.list.map((nested) => (
                <div className={styles.dropdownItem} key={nested.title}>
                  <Link href={nested.path}>{nested.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </Portal>
      </li>
    );
  }), [hoverKey, links, scrollToItem]);

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
