import React from 'react';
import OrderNumber from './OrderNumber';

import css from '../SectionOurServices.module.css';

const ListItem = ({ items }) => {
  return (
    <ul className={css.list}>
      {items?.map((item, index) => {
        const { title, description, nestedList } = item;

        return (
          <li key={item.id} className={css.listItem}>
            <OrderNumber number={index + 1} />
            <div className={css.itemWrapper}>
              <h3 className={css.contentTitle}>{title}</h3>
              <p className={css.contentDescription}>{description}</p>
              {nestedList && nestedList.length > 0 && (
                <ul className={css.nestedList}>
                  {nestedList?.map(nestedItem => (
                    <li className={css.nestedLi} key={nestedItem.id}>
                      <p className={css.nestedText}>{nestedItem.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
