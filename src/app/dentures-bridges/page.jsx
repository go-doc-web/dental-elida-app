import React from 'react';
import SectionHero from '@/componets/SectionHero';

import SectionOurServices from '@/componets/SectionOurServices';
import DontDelay from '@/componets/DontDelay';

import { hero, dontDelay, sectionDenturesServices, sectionBridjesServices } from '@/config/bridjes';
const DenturesBridgesPage = () => {
  return (
    <>
      <SectionHero {...hero} />

      <SectionOurServices
        title="Our"
        spanTitle="Bridges Services"
        items={sectionDenturesServices}
      />
      <SectionOurServices
        title="Our"
        spanTitle="Dentures Services"
        items={sectionBridjesServices}
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

export default DenturesBridgesPage;
