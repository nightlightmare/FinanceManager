import React, { useState } from 'react';
import { Affix, Button, Drawer } from 'antd';

import { FilterOutlined } from '@ant-design/icons';

import styles from './Filter.module.scss';

const Filter = () => {
  const [visible, setVisible] = useState(false);

  const openDrawerHandler = () => {
    setVisible(true);
  };

  const closeDrawerHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Affix className={styles.affix} offsetBottom={48}>
        <Button
          type="primary"
          icon={<FilterOutlined />}
          size="large"
          onClick={openDrawerHandler}
        />
      </Affix>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={closeDrawerHandler}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    </>
  );
};

export default Filter;
