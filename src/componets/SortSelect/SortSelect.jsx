import React from 'react';
import { Select, Space } from 'antd';

const SortSelect = ({ handleChange }) => (
  <Space wrap>
    <Select
      defaultValue=" New First"
      style={{
        width: 120,
        height: 40,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'new',
          label: 'New First',
        },
        {
          value: 'old',
          label: 'Old First',
        },

        // {
        //   value: 'all',
        //   label: 'All',
        // },
      ]}
    />
  </Space>
);
export default SortSelect;
