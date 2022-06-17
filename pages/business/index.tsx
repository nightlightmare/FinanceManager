import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import getLocalization from 'utils/getLocalization';
import { Localization } from 'types/localization';
import { dictionary } from 'localization/dictionary';

import styles from './index.module.scss';

interface BusinessPageProps {
  localization: Localization
}

const BusinessPage: NextPage<BusinessPageProps> = ({ localization }) => {
  // Пример, как использовать локализацию на странице
  const { locale } = useRouter();
  const { t } = getLocalization(localization, locale);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">

        <p className="description">
          Get started by editing
          {' '}
          <code className="code">pages/business/index.tsx</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>
              {t('Home')}
              {' '}
              &rarr;
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>
              {t('About')}
              {' '}
              &rarr;
            </h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="card"
          >
            <h2>
              {t('Users List')}
              {' '}
              &rarr;
            </h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>
              {t('Users API')}
              {' '}
              &rarr;
            </h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>
              {t('Language')}
              {' '}
              &rarr;
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit unde dignissimos tempore fuga? Id, cumque.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>
              {t('Far from home')}
              {' '}
              &rarr;
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati odit sit unde! Aperiam, sint perspiciatis.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    localization: dictionary,
  }, // will be passed to the page component as props
});
