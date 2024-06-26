import React from 'react';
import SectionHero from '@/componets/SectionHero';
import SectionAdvantages from '@/componets/SectionAdvantages';
import SectionWhen from '@/componets/SectionWhen';
import DontDelay from '@/componets/DontDelay';

import {
  hero,
  sectionChoose,
  sectionChooseList,
  sectionWhen,
  sectionWhenList,
  dontDelay,
} from '@/config/implants-page';
const ImplantsPage = () => {
  return (
    <>
      <SectionHero {...hero} />
      <SectionAdvantages
        items={sectionChooseList}
        title={sectionChoose.title}
        spanTitle={sectionChoose.spanTitle}
      />
      <SectionWhen
        items={sectionWhenList}
        title={sectionWhen.title}
        spanTitle={sectionWhen.spanTitle}
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

export default ImplantsPage;
