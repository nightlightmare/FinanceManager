import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Localization } from 'types/localization';
import { dictionary } from 'localization/dictionary';
import { PageHeader } from 'antd';
import Title from 'antd/lib/typography/Title';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

interface HomePageProps {
  localization: Localization;
}

const HomePage: NextPage<HomePageProps> = () => (
  <>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="Dashboard" />
    </Head>

    <div className="main">
      <PageHeader
        ghost={false}
        title="Финансы"
      />
    </div>
  </>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    localization: dictionary,
  },
  revalidate: 300,
});
