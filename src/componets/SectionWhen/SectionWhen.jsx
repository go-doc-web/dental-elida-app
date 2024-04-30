import React from 'react';
import SectionWhenItem from '@/componets/SectionWhen/SectionWhenItem';

const SectionWhen = ({ items, title, spanTitle }) => {
  return (
    <section>
      <h2 className="section-title ">
        {title}
        <span> {spanTitle}</span>
      </h2>
      <ul className="when-list">
        {items.map(item => (
          <SectionWhenItem key={item.id} title={item.title} icon={item.icon} />
        ))}
      </ul>
    </section>
  );
};

export default SectionWhen;
