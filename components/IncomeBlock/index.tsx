import React, { useMemo, useState } from 'react';
import {
  Card,
  Table,
  Collapse,
  Switch,
} from 'antd';
import Chart from 'react-google-charts';

import { BarChartOutlined, PieChartOutlined } from '@ant-design/icons';

import styles from './IncomeBlock.module.scss';

type ChartTypes = 'PieChart' | 'Bar';

const IncomeBlock: React.FC = () => {
  const [chartType, setChartType] = useState<ChartTypes>('PieChart');

  const [data] = useState([{
    key: 1,
    category: 'Зарплата',
    amount: 120.06,
  },
  {
    key: 2,
    category: 'Дивиденды',
    amount: 10.46,
  }]);

  const columns = [
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const options = {
    legend: { position: 'none' },
    chartArea: { width: '80%', height: '80%' },
  };

  const chartData = useMemo(() => [['Category', 'Amount'], ...data.map((item) => [item.category, item.amount])], [data]);

  const onSwitchChange = (checked: boolean) => {
    setChartType(checked ? 'PieChart' : 'Bar');
  };

  return (
    <Card title={(
      <div className={styles.header}>
        <span>Доходы по категориям</span>

        <Switch
          checkedChildren={<PieChartOutlined />}
          unCheckedChildren={<BarChartOutlined />}
          defaultChecked
          className={styles.switch}
          onClick={onSwitchChange}
        />
      </div>
    )}
    >

      <Chart
        chartType={chartType}
        data={chartData}
        options={options}
        width="100%"
        height={400}
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

export default IncomeBlock;
