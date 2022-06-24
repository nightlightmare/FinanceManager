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
  Switch,
  Select,
} from 'antd';
import Chart from 'react-google-charts';

import { BarChartOutlined, PieChartOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

const { Option } = Select;

interface HomePageProps {
  localization: Localization;
}

const HomePage: NextPage<HomePageProps> = () => {
  const options = {
    hAxis: { title: 'Age', viewWindow: { min: 0, max: 15 } },
    vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
    legend: { position: 'none' },
  };

  const data = [
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ];

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
              <Card title="Баланс" bordered>
                <Chart
                  chartType="LineChart"
                  data={data}
                  options={options}
                  width="100%"
                  height={400}
                />
              </Card>
            </Col>
            <Col xs={24} xxl={12}>
              <Card title="Расходы по категориям">
                <Switch
                  checkedChildren={<PieChartOutlined />}
                  unCheckedChildren={<BarChartOutlined />}
                  defaultChecked
                />
                <Chart
                  chartType="PieChart"
                  data={data2}
                  options={options}
                  width="100%"
                  height={400}
                />
              </Card>
            </Col>
            <Col xs={24} xxl={12}>
              <Card title="Доходы по категориям">
                <Chart
                  chartType="Bar"
                  data={data2}
                  options={options}
                  width="100%"
                  height={400}
                />
              </Card>
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
