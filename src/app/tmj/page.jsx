//YODO FUCK

import SectionHero from '@/componets/SectionHero';
import SectionAdvantages from '@/componets/SectionAdvantages';
import SectionOurServices from '@/componets/SectionOurServices';
import DontDelay from '@/componets/DontDelay';

import { hero, sectionChoose, sectionChooseList, dontDelay, sectionServises } from '@/config/tmj';

const TMJPage = () => {
  return (
    <>
      <SectionHero {...hero} />
      <SectionAdvantages
        items={sectionChooseList}
        title={sectionChoose.title}
        spanTitle={sectionChoose.spanTitle}
      />
      <SectionOurServices title="Our" spanTitle="TMJ Services" items={sectionServises} />

      <DontDelay
        spanFirst={dontDelay.spanFirst}
        middleText={dontDelay.middleText}
        spanSecond={dontDelay.spanSecond}
        endText={dontDelay.endText}
      />
    </>
  );
};

export default TMJPage;
