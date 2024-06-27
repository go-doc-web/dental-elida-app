import React from 'react';
import SectionHero from '@/componets/SectionHero';
import ContactUsToday from '@/componets/ContactUsToday';
import InsuranceWeAccept from '@/componets/InsuranceWeAccept';

import { hero, сontactUsToday, insuranceWeAccept } from '@/config/insurances';
const InsurancesPage = () => {
  return (
    <>
      <SectionHero {...hero} />
      <InsuranceWeAccept title="Insurance " spanTitle="We Accept" items={insuranceWeAccept} />
      <ContactUsToday
        title={сontactUsToday.title}
        spanTitle={сontactUsToday.spanTitle}
        firstParagraf={сontactUsToday.firstParagraf}
        spanFirst={сontactUsToday.spanFirst}
        middleText={сontactUsToday.middleText}
        spanSecond={сontactUsToday.spanSecond}
        endText={сontactUsToday.endText}
      />
    </>
  );
};

export default InsurancesPage;
