import React from 'react';
import { Select, Space } from 'antd';
const handleChange = value => {
  console.log(`selected ${value}`);
};
const SortSelect = () => (
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
          value: 'new',
          label: 'New First',
        },
        {
          value: 'old',
          label: 'Old First',
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
export default SortSelect;
