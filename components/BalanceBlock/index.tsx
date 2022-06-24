import { Card } from 'antd';
import React from 'react';
import Chart from 'react-google-charts';

const BalanceBlock: React.FC = () => {
  const options = {
    legend: { position: 'none' },
    chartArea: { width: '80%', height: '80%' },
  };

  const data = [
    ['Date', 'Balance'],
    ['02.03', 12],
    ['03.03', 5.5],
    ['04.03', 14],
    ['05.03', 5],
    ['06.03', 3.5],
    ['07.03', 7],
    ['08.03', 14],
    ['09.03', 5],
    ['10.03', 3.5],
    ['11.03', 7],
    ['02.03', 12],
    ['03.03', 5.5],
    ['04.03', 14],
    ['05.03', 5],
    ['06.03', 3.5],
    ['07.03', 7],
    ['08.03', 14],
    ['09.03', 5],
    ['10.03', 3.5],
    ['11.03', 7],
    ['02.03', 12],
    ['03.03', 5.5],
    ['04.03', 14],
    ['05.03', 5],
    ['06.03', 3.5],
    ['07.03', 7],
    ['08.03', 14],
    ['09.03', 5],
    ['10.03', 3.5],
    ['11.03', 7],
    ['02.03', 12],
    ['03.03', 5.5],
    ['04.03', 14],
    ['05.03', 5],
    ['06.03', 3.5],
    ['07.03', 7],
    ['08.03', 14],
    ['09.03', 5],
    ['10.03', 3.5],
    ['11.03', 7],
  ];

  return (
    <Card title="Баланс" bordered>
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height={450}
      />
    </Card>
  );
};

export default BalanceBlock;
