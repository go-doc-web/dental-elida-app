import React from 'react';

import SectionHero from '@/componets/SectionHero';
import SectionAdvantages from '@/componets/SectionAdvantages';

import { hero, sectionChoose, sectionChooseList } from '@/config/oralSyrgeryPage';

const OralSurgeryPage = () => {
  return (
    <>
      <SectionHero {...hero} />
      <SectionAdvantages
        title={sectionChoose.title}
        spanTitle={sectionChoose.spanTitle}
        items={sectionChooseList}
      />
    </>
  );
};

export default OralSurgeryPage;
