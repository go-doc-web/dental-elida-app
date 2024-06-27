import React from 'react';
import ItemList from './ItemList/ItemList';
import clsx from 'clsx';
import css from './InsuranceWeAccept.module.css';
const InsuranceWeAccept = ({ title, spanTitle, items }) => {
  return (
    <>
      <section className={css.sectionInsurance}>
        <h2 className={clsx('section-title', css.insuranceTitle)}>
          {title}
          <span> </span> <span>{spanTitle}</span>
        </h2>
        <div className={css.wrapperLists}>
          <ItemList items={items.state} title="STATE / MEDICAID" />
          <ItemList items={items.private} title="PRIVATE" />
          <ItemList items={items.unions} title="UNIONS" muchMore={true} />
        </div>
      </section>
    </>
  );
};

export default InsuranceWeAccept;
