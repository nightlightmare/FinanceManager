import React, { useMemo, useState } from 'react';
import {
  Card,
  Table,
  Collapse,
  Switch,
} from 'antd';
import Chart from 'react-google-charts';

import { BarChartOutlined, PieChartOutlined } from '@ant-design/icons';

import styles from './CategoryChartBlock.module.scss';

type ChartTypes = 'PieChart' | 'Bar';

type CategoryAmountType = {
  key: number;
  category: string;
  amount: number;
};

interface CategoryChartBlockProps {
  data: CategoryAmountType[];
  title: string;
}

const CategoryChartBlock: React.FC<CategoryChartBlockProps> = ({ data, title }) => {
  const [chartType, setChartType] = useState<ChartTypes>('PieChart');

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
        <span>{title}</span>

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

export default CategoryChartBlock;
