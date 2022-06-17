import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

const Page404: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Error 404</title>
    </Head>

    <div className="main">
      <h2>Error 404</h2>
    </div>
  </div>
);

export default Page404;
