import React from 'react';

const SectionHero = ({ title, spanTitle, description }) => {
  return (
    <section className="section section-hero">
      <h1 className="section-hero__title">
        {title}
        <span> {spanTitle}</span>
      </h1>
      <p className="section-hero_description">{description}</p>
    </section>
  );
};

export default SectionHero;
