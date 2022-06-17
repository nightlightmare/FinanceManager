import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import getRates from 'utils/getRates';
import { Localization } from 'types/localization';
import { RatesData } from 'types/rates';
import { dictionary } from 'localization/dictionary';

import TopBanner from 'components/blocks/TopBanner';
import TwoCards from 'components/blocks/TwoCards';
import FourCards from 'components/blocks/FourCards';
import NewsList from 'components/blocks/NewsList';
import ExchangeBlock from 'components/blocks/Exchange';

interface HomePageProps {
  localization: Localization;
  rates: RatesData;
}

const HomePage: NextPage<HomePageProps> = ({ rates }) => (
  <>
    <Head>
      <title>ARMBUSINESSBANK</title>
      <meta name="description" content="ARMBUSINESSBANK" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="main">

      <TopBanner />

      <TwoCards />

      <FourCards />

      <ExchangeBlock data={rates} />

      <NewsList />

    </div>
  </>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  // Курсы обновляются редко, достаточно их подгружать при помощи SSR
  const rates = await getRates();

  return ({
    props: {
      localization: dictionary,
      rates: JSON.parse(rates),
    },
    revalidate: 300,
  });
};
