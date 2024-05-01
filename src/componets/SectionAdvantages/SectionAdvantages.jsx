'use client';
import { useState } from 'react';
import SectionAdvantagesList from './SectionAdvantagesList/SectionAdvantagesList';

import css from './SectionAdvantages.module.css';

const SectionAdvantages = ({ items, title, spanTitle }) => {
  return (
    <section className="section section-advantages">
      <h2 className="section-advantages__title">
        {title}
        <span> </span> <span>{spanTitle}</span>
      </h2>
      <ul className="section-advantages_list list">
        {items.map(item => {
          return (
            <li key={item.id} className="section-advantages_list-item">
              <SectionAdvantagesList
                title={item.title}
                image={item.image}
                description={item.description}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionAdvantages;
