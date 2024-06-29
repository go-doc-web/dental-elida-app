import React from 'react';

const SectionHero = ({ title, spanTitle1, spanTitle2, description, wrapperCss }) => {
  return (
    <section className="section section-hero">
      <h1 className="section-hero__title">
        {title} <span>{spanTitle1}</span>
        <br />
        <span>{spanTitle2}</span>
      </h1>
      <p className="section-hero_description">{description}</p>
    </section>
  );
};

export default SectionHero;
