//TODO Change img/jpg in production
import chooseImg1 from '@/assets/endodonist/choose_1.jpg';
import chooseImg2 from '@/assets/endodonist/choose_2.jpg';
import chooseImg3 from '@/assets/endodonist/choose_3.jpg';
import chooseImg4 from '@/assets/endodonist/choose_4.jpg';
import whenIcon1 from '@/assets/perodontist/icon_1.svg';
import whenIcon2 from '@/assets/perodontist/icon_2.svg';
import whenIcon3 from '@/assets/perodontist/icon_3.svg';
import whenIcon4 from '@/assets/perodontist/icon_4.svg';

export const hero = {
  title: 'Periodontist',
  spanTitle: 'Services at Elida Dental Care',
  description:
    'Welcome to Elida Dental Care, where our dedicated team of Periodontists is committed to providing specialized care for your gum health. Periodontal health is crucial for maintaining a strong foundation for your teeth, and our expert Periodontists are here to offer a range of services tailored to address your unique needs.',
};

// Section Choose

export const sectionChoose = {
  title: 'Why choose',
  spanTitle: 'Our Periodontist Services?',
};

// List Choose

export const sectionChooseList = [
  {
    id: '1',
    title: 'Gum Health Specialists',
    description: `Our Periodontists specialize in the prevention, diagnosis, and treatment of gum diseases. Whether you're dealing with gingivitis or more advanced periodontitis, our team has the expertise to guide you through the necessary steps for optimal gum health.`,
    image: chooseImg1,
  },

  {
    id: '2',
    title: 'Advanced Treatment Option',
    description:
      'From non-surgical periodontal therapies to state-of-the-art surgical interventions, our Periodontists employ the latest advancements in periodontal care. We tailor treatment plans to your specific condition, ensuring the most effective and personalized care.',
    image: chooseImg2,
  },
  {
    id: '3',
    title: 'Preventive Education',
    description:
      'At Elite Dental Care, we believe in empowering our patients. Our Periodontists provide education on proper oral hygiene practices and work with you to develop personalized strategies for preventing gum disease and maintaining long-term gum health.',
    image: chooseImg3,
  },
  {
    id: '4',
    title: 'Compassionate Patient Care',
    description:
      'We understand that dealing with gum issues can be concerning. Our Periodontists prioritize compassionate and patient-centric care, ensuring you are comfortable and informed at every step of your treatment journey.',
    image: chooseImg4,
  },
];

// Section When

export const sectionWhen = {
  title: 'When',
  spanTitle: 'to See a Periodontist',
};

export const sectionWhenList = [
  { id: '1', title: 'Bleeding or swollen gums', icon: whenIcon1 },
  { id: '1', title: 'Persistent bad breath', icon: whenIcon2 },
  { id: '1', title: 'Receding gums or changes in gum texture', icon: whenIcon3 },
  { id: '1', title: 'Loose teeth or changes in bite', icon: whenIcon4 },
];

// DontDelay

export const dontDelay = {
  spanFirst: "Don't delay",
  middleText: `and take the proactive step towards optimal gum health. Schedule a consultation with our experienced Periodontists at`,
  spanSecond: 'EIida Dental Care',
  endText: `and experience the difference specialized care can make in preserving your smile.`,
};
