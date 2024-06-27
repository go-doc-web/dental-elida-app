import React from 'react';
import css from '../InsuranceWeAccept.module.css';
const ItemList = ({ items, title, muchMore = false }) => {
  return (
    <div className={css.elementInsurance}>
      <h2>{title}</h2>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li className={css.listItem} key={index}>
            <div className={css.circle}></div>
            <span className={css.itemText}>{item}</span>
          </li>
        ))}
      </ul>
      {muchMore && <p className={css.mauchMore}>...AND MUCH MORE!</p>}
    </div>
  );
};

export default ItemList;
