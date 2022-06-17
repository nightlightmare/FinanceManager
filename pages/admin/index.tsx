import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.scss';

// Когда добавится функционал в админку - навигация будет осуществляться через эту страницу

const AdminPage: NextPage = () => (
  <>
    <Head>
      <title>Admin panel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
      <h1>Панель администрирования</h1>

      <ul>
        <li>
          <Link href="/admin/news">Новости</Link>
        </li>
      </ul>
    </div>

  </>
);

export default AdminPage;
