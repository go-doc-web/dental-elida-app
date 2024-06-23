import React from 'react';
import css from './SectionOurServices.module.css';

import ListItem from './ListItem/listItem';
import { sectionServises } from '@/config/tmj';

const SectionOurServices = ({ title, spanTitle }) => {
  return (
    <section className={css.section}>
      <h2 className="section-title ">
        {title}
        <span> {spanTitle}</span>
      </h2>

      <ListItem items={sectionServises} />
    </section>
  );
};

export default SectionOurServices;
