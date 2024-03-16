'use client';
import React from 'react';
import { Select, Space } from 'antd';

import css from './StatusSelect.module.css';
const handleChange = value => {
  console.log(`selected ${value}`);
};
const StatusSelect = () => (
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
          value: 'Posted',
          label: 'Posted',
        },
        {
          value: 'Waiting',
          label: 'Waiting',
        },

        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
  </Space>
);
export default StatusSelect;
