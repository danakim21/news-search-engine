import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './loading.module.css';

export const Loading: React.FC = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

  return (
    <div className={styles.loadingContainer}>
      <Spin indicator={antIcon} />
    </div>
  );
};
