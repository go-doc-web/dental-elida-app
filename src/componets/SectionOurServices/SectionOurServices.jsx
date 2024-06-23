import React from 'react';
import css from './SectionOurServices.module.css';

import ListItem from './ListItem/ListItem';

const SectionOurServices = ({ title, spanTitle, items }) => {
  return (
    <section className={css.section}>
      <h2 className="section-title ">
        {title}
        <span> {spanTitle}</span>
      </h2>

      <ListItem items={items} />
    </section>
  );
};

export default SectionOurServices;
