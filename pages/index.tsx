import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Localization } from 'types/localization';
import { RatesData } from 'types/rates';
import { dictionary } from 'localization/dictionary';

interface HomePageProps {
  localization: Localization;
  rates: RatesData;
}

const HomePage: NextPage<HomePageProps> = () => (
  <>
    <Head>
      <title>Finance Manager</title>
      <meta name="description" content="Finance Manager" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="main" />
  </>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    localization: dictionary,
  },
  revalidate: 300,
});
