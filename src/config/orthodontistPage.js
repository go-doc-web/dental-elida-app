import chooseImg1 from '@/assets/images/img_23.jpg';
import chooseImg2 from '@/assets/images/img_24.jpg';
import chooseImg3 from '@/assets/images/img_25.jpg';
import chooseImg4 from '@/assets/images/img_16.jpg';
import whenIcon1 from '@/assets/orthodontist/icon_1.svg';
import whenIcon2 from '@/assets/orthodontist/icon_2.svg';
import whenIcon3 from '@/assets/orthodontist/icon_3.svg';
import whenIcon4 from '@/assets/orthodontist/icon_4.svg';

export const hero = {
  title: 'Orthodontist',
  spanTitle1: 'Services',
  spanTitle2: 'at Elida Dental Care',
  description: `Welcome to Elida Dental Care, where our orthodontic services are tailored to transform smiles and enhance confidence. With our team of skilled orthodontists and state-of-the-art technology, we're committed to providing you with the highest quality orthodontic care.`,
};

// Section Choose

export const sectionChoose = {
  title: 'Why choose',
  spanTitle: 'Our Orthodontist Services?',
};

// List Choose

export const sectionChooseList = [
  {
    id: '1',
    title: 'Expertise and Experience',
    description: `Our orthodontists are highly trained and experienced in diagnosing and treating a wide range of orthodontic issues, ensuring precise and effective care for every patient.`,
    image: chooseImg1,
  },

  {
    id: '2',
    title: 'Personalized Treatment',
    description: `We understand that every smile is unique, which is why we tailor our orthodontic treatment plans to address your specific needs and goals, delivering results that exceed your expectations.`,
    image: chooseImg2,
  },
  {
    id: '3',
    title: 'Advanced Technology',
    description: `We utilize cutting-edge orthodontic technology, such as digital impressions and 3D imaging, to provide accurate diagnostics and treatment planning, resulting in more efficient and comfortable orthodontic care.`,
    image: chooseImg3,
  },
  {
    id: '4',
    title: 'Comprehensive Care',
    description: `From your initial consultation to the completion of your orthodontic treatment, we're with you every step of the way, providing ongoing support and guidance to ensure a seamless and successful orthodontic journey`,
    image: chooseImg4,
  },
];

// Section When

export const sectionWhen = {
  title: 'Our',
  spanTitle: ' Orthodontist Services',
};

export const sectionWhenList = [
  { id: '1', title: 'Traditional Braces', icon: whenIcon1 },
  { id: '2', title: 'Early Orthodontic Intervention', icon: whenIcon2 },
  { id: '3', title: 'Adult Orthodontics', icon: whenIcon3 },
  { id: '4', title: 'Orthodontic Retention', icon: whenIcon4 },
];

// DontDelay

export const dontDelay = {
  spanFirst: '',
  middleText: `At`,
  spanSecond: 'EIida Dental Care,',
  endText: `we're dedicated to crafting confident smiles through orthodontic excellence. Schedule a consultation with our orthodontic team today and take the first step towards achieving the smile you've always wanted.`,
};
