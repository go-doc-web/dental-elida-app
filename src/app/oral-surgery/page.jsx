import React from 'react';
import Image from 'next/image';
import SectionHero from '@/componets/SectionHero';
import SectionAdvantages from '@/componets/SectionAdvantages';

import { hero, sectionChoose, sectionChooseList } from '@/config/oralSyrgeryPage';

const OralSurgeryPage = () => {
  return (
    <>
      <SectionHero title={hero.title} spanTitle={hero.spanTitle} description={hero.description} />
      <SectionAdvantages
        title={sectionChoose.title}
        spanTitle={sectionChoose.spanTitle}
        items={sectionChooseList}
      />
    </>
  );
};

export default OralSurgeryPage;
