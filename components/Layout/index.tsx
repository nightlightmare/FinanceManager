import React, { ReactNode } from 'react';
import TopMenu from 'components/TopMenu';
import Footer from 'components/Footer';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <header>
      <TopMenu />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
