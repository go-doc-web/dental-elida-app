import React from 'react';

import SectionHero from '@/componets/SectionHero';
import SectionAdvantages from '@/componets/SectionAdvantages';
import DontDelay from '@/componets/DontDelay';

import { hero, sectionChoose, sectionChooseList, dontDelay } from '@/config/pediatricPage';

const PediatricPage = () => {
  return (
    <>
      <SectionHero title={hero.title} spanTitle={hero.spanTitle} description={hero.description} />
      <SectionAdvantages
        title={sectionChoose.title}
        spanTitle={sectionChoose.spanTitle}
        items={sectionChooseList}
      />
      <DontDelay
        spanFirst={dontDelay.spanFirst}
        middleText={dontDelay.middleText}
        spanSecond={dontDelay.spanSecond}
        endText={dontDelay.endText}
      />
    </>
  );
};

export default PediatricPage;
