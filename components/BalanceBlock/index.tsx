import React, { useMemo, useState } from 'react';
import { Card, Table, Collapse } from 'antd';
import Chart from 'react-google-charts';

import styles from './BalanceBlock.module.scss';

const BalanceBlock: React.FC = () => {
  const [data] = useState([{
    key: 1,
    date: new Date('02-04-2022').toDateString(),
    balance: 1220.06,
  },
  {
    key: 2,
    date: new Date('02-05-2022').toDateString(),
    balance: 1210.46,
  }]);

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  const options = {
    legend: { position: 'none' },
    chartArea: { width: '80%', height: '80%' },
  };

  const chartData = useMemo(() => [['Date', 'Balance'], ...data.map((item) => [item.date, item.balance])], [data]);

  return (
    <Card title="Баланс" bordered>
      <Chart
        chartType="LineChart"
        data={chartData}
        options={options}
        width="100%"
        height={450}
      />

      <div className={styles.table}>
        <Collapse>
          <Collapse.Panel header="Показать таблицу" key="1">
            <Table columns={columns} dataSource={data} pagination={false} />
          </Collapse.Panel>
        </Collapse>
      </div>
    </Card>
  );
};

export default BalanceBlock;
