import React from 'react';
import { Select, Space } from 'antd';

import css from './RatingSelect.module.css';
const handleChange = value => {};
const RatingSelect = ({ handleChange }) => (
  <Space wrap>
    <Select
      defaultValue="All "
      style={{
        width: 120,
        height: 40,
      }}
      onChange={handleChange}
      options={[
        {
          value: 1,
          label: '1 Star',
        },
        {
          value: 2,
          label: '2 Stars',
        },
        {
          value: 3,
          label: '3 Stars',
        },
        {
          value: 4,
          label: '4 Stars',
        },
        {
          value: 5,
          label: '5 Stars',
        },
        {
          value: 'all',
          label: 'All',
        },
      ]}
    />
  </Space>
);
export default RatingSelect;
