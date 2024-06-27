import React from 'react';
import css from './ContactUsToday.module.css';
const ContactUsToday = ({
  firstParagraf,
  spanFirst,
  middleText,
  spanSecond,
  endText,
  spanTitle,
  title,
}) => {
  return (
    <section className={css.ContactUsToday}>
      <h2 className="section-title section-title-contacts ">
        {title}
        <span> {spanTitle}</span>
      </h2>
      <p className="contact-us-today">{firstParagraf}</p>
      <p className="dont-delay">
        <span className="dont-delay-first">{spanFirst}</span> {middleText}{' '}
        <span className="dont-delay-second">{spanSecond}</span> {endText}
      </p>
    </section>
  );
};

export default ContactUsToday;
