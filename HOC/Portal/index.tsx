import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode
}

// HOC для использования порталов
const Portal:React.FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  // если страница отрендерилась - можно создавать порталы
  return mounted
    ? createPortal(
      children,
      document.querySelector('#portal-root') as Element,
    )
    : null;
};

export default Portal;
