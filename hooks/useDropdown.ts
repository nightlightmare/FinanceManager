import {
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

/**
 * Хук, отслеживающий клик по объекту и возвращающий состояние (открыт/закрыт)
 */
const useDropdown = (dropdownRef: RefObject<HTMLElement>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = useCallback((event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (path.includes(dropdownRef.current) && !isDropdownOpen) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [dropdownRef, isDropdownOpen]);

  useEffect(() => {
    if (dropdownRef) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dropdownRef, handleClick]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
  };
};

export default useDropdown;
