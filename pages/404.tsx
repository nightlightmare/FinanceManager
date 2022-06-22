import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Button, Result } from 'antd';
import Link from 'next/link';
import styles from './index.module.scss';

const Page404: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Error 404</title>
    </Head>

    <Result
      status="404"
      title="404"
      subTitle="Страница не существует"
      extra={(
        <Link href="/dashboard">
          <Button type="primary">Вернуться на главную</Button>
        </Link>
      )}
    />
  </div>
);

export default Page404;
