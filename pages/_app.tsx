import React, { useMemo } from 'react';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer } from 'antd/lib/layout/layout';

import { WalletOutlined } from '@ant-design/icons';

import 'styles/globals.css';

import styles from './index.module.scss';

const items = [
  { key: 1, title: 'Диаграммы', label: <Link href="/dashboard">Диаграммы</Link> },
  { key: 2, title: 'Сбережения', label: <Link href="/savings">Сбережения</Link> },
  { key: 3, title: 'Доходы', label: <Link href="/income">Доходы</Link> },
  { key: 4, title: 'Расходы', label: <Link href="/outlay">Расходы</Link> },
  { key: 5, title: 'Переводы', label: <Link href="/transactions">Переводы</Link> },
  { key: 6, title: 'Категории', label: <Link href="/categories">Категории</Link> },
];

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  // Для Админки не отрисовываем шапку и футер
  const isDashboard = useMemo(() => route.includes('dashboard'), [route]);

  if (isDashboard) {
    return (
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className={styles.logo}>
            <WalletOutlined />
            <span>Finance Manager</span>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
            minHeight: '100vh',
          }}
        >
          <Content>
            <div
              className="site-layout-background"
              style={{ padding: 24 }}
            >
              <Component {...pageProps} />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            {`Finance Manager ©${new Date().getUTCFullYear()} Created by `}
            <a href="https://github.com/nightlightmare">Petr Grishin</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
