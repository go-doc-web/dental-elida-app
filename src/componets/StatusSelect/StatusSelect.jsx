'use client';
import React from 'react';
import { Select, Space } from 'antd';

import css from './StatusSelect.module.css';

const StatusSelect = ({ handleChange }) => (
  <Space wrap>
    <Select
      defaultValue="All"
      style={{
        width: 123,
        height: 40,
      }}
      className={css.select}
      onChange={handleChange}
      options={[
        {
          value: 'posted',
          label: 'Posted',
        },
        {
          value: 'waiting',
          label: 'Waiting',
        },

        {
          value: 'all',
          label: 'All',
        },
      ]}
    />
  </Space>
);
export default StatusSelect;
