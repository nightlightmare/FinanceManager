import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Localization } from 'types/localization';
import { dictionary } from 'localization/dictionary';
import {
  Card,
  Col,
  PageHeader,
  Row,
} from 'antd';
import Chart from 'react-google-charts';
import BalanceBlock from 'components/BalanceBlock';
import ExpensesBlock from 'components/ExpensesBlock';

import IncomeBlock from 'components/IncomeBlock';
import styles from './index.module.scss';

interface HomePageProps {
  localization: Localization;
}

const HomePage: NextPage<HomePageProps> = () => {
  const options = {
    hAxis: { title: 'Age', viewWindow: { min: 0, max: 15 } },
    vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
    legend: { position: 'none' },
  };

  const data2 = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];

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
              <ExpensesBlock />
            </Col>
            <Col xs={24} xxl={12}>
              <IncomeBlock />
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
