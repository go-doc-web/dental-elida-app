import chooseImg1 from '@/assets/endodonist/choose_1.jpg';
import chooseImg2 from '@/assets/endodonist/choose_2.jpg';
import chooseImg3 from '@/assets/endodonist/choose_3.jpg';
import chooseImg4 from '@/assets/endodonist/choose_4.jpg';
import whenIcon1 from '@/assets/endodonist/icon_1.svg';
import whenIcon2 from '@/assets/endodonist/icon_2.svg';
import whenIcon3 from '@/assets/endodonist/icon_3.svg';
import whenIcon4 from '@/assets/endodonist/icon_4.svg';

export const hero = {
  title: 'Endodontist',
  spanTitle1: 'Services',
  spanTitle2: 'at Elida Dental Care',
  description:
    'Welcome to Elida Dental Care, where we prioritize your oral health with specialized care. Our dedicated team of skilled Endodontists is here to provide expert solutions for complex dental issues related to the pulp and nerves of your teeth.',
};

// Section Choose

export const sectionChoose = {
  title: 'Why choose',
  spanTitle: 'Our Endodontist Services?',
};

// List Choose

export const sectionChooseList = [
  {
    id: '1',
    title: 'Specialized Expertise',
    description: `Our Endodontists specialize in the diagnosis and treatment of issues affecting the tooth's interior, including root canals. Trust their in-depth knowledge and expertise to address your unique endodontic needs.`,
    image: chooseImg1,
  },

  {
    id: '2',
    title: 'Comprehensive Root Canal Therapy',
    description:
      'From routine root canal procedures to more complex cases, our Endodontists are equipped to provide comprehensive root canal therapy. This often vital procedure can save your natural tooth, alleviating pain and restoring oral health.',
    image: chooseImg2,
  },
  {
    id: '3',
    title: 'State-of-the-Art Technology',
    description:
      'Benefit from cutting-edge technology utilized in our facilities. Our Endodontists leverage advanced diagnostic tools and equipment to ensure accurate assessments and precise treatments, maximizing your comfort and outcomes',
    image: chooseImg3,
  },
  {
    id: '4',
    title: 'Patient-Centric Approach',
    description:
      'Your comfort and understanding matter to us. Our Endodontists take the time to discuss your diagnosis, treatment options, and answer any questions you may have. We prioritize open communication to ensure you feel confident and informed throughout your experience.',
    image: chooseImg4,
  },
];

// Section When

export const sectionWhen = {
  title: 'When',
  spanTitle: 'to See an Endodontist',
};

export const sectionWhenList = [
  { id: '1', title: 'Persistent tooth pain or sensitivity', icon: whenIcon1 },
  { id: '2', title: 'Swelling or tenderness around the gums', icon: whenIcon2 },
  { id: '3', title: 'Pimple on the gums', icon: whenIcon3 },
  { id: '4', title: 'Discoloration or darkening of a tooth', icon: whenIcon4 },
];

// DontDelay

export const dontDelay = {
  spanFirst: "Don't delay",
  middleText: `seeking specialized care. Schedule a
      consultation with our experienced Endodontists at`,
  spanSecond: 'EIida Dental Care',
  endText: `to embark on a journey towards
      improved oral health and lasting relief.`,
};
