import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Localization } from 'types/localization';
import { dictionary } from 'localization/dictionary';
import { Col, PageHeader, Row } from 'antd';
import BalanceBlock from 'components/BalanceBlock';
import CategoryChartBlock from 'components/CategoryChartBlock';

import styles from './index.module.scss';

interface HomePageProps {
  localization: Localization;
}

const HomePage: NextPage<HomePageProps> = () => {
  const incomeData = [{
    key: 1,
    category: 'Зарплата',
    amount: 1120.06,
  },
  {
    key: 2,
    category: 'Дивиденды',
    amount: 10.46,
  }];

  const expenseData = [{
    key: 1,
    category: 'Еда домой',
    amount: 20.06,
  },
  {
    key: 2,
    category: 'Еда в заведении',
    amount: 10.46,
  }];

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>

      <div className="main">
        <PageHeader
          ghost={false}
          title="Диаграммы"
        />

        <div className={styles.cards}>

          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} xxl={12}>
              <BalanceBlock />
            </Col>
            <Col xs={24} xxl={12}>
              <CategoryChartBlock data={expenseData} title="Категории расходов" />
            </Col>
            <Col xs={24} xxl={12}>
              <CategoryChartBlock data={incomeData} title="Категории доходов" />
            </Col>
          </Row>
        </div>

      </div>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    localization: dictionary,
  },
  revalidate: 300,
});
