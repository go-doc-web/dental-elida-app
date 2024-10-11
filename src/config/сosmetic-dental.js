import chooseImg1 from '@/assets/images/img_4.jpg';
import chooseImg2 from '@/assets/images/img_26.jpg';
import chooseImg3 from '@/assets/images/img_18.jpg';
import chooseImg4 from '@/assets/images/img_27.jpg';
import whenIcon1 from '@/assets/cosmetic/icon_1.svg';
import whenIcon2 from '@/assets/cosmetic/icon_2.svg';
import whenIcon3 from '@/assets/cosmetic/icon_3.svg';
import whenIcon4 from '@/assets/cosmetic/icon_4.svg';

export const hero = {
  title: 'Cosmetic Dental',
  spanTitle1: 'Services',
  spanTitle2: 'at Elida Dental Care',
  description: `Welcome to Elida Dental Care, where we specialize in enhancing smiles through a wide range of cosmetic dental services. Our experienced team of dental professionals is dedicated to helping you achieve the beautiful, confident smile you’ve always wanted.`,
};

// Section Choose

export const sectionChoose = {
  title: 'Why choose',
  spanTitle: 'Cosmetic Dental Services?',
};

// List Choose

export const sectionChooseList = [
  {
    id: '1',
    title: 'Experienced Team',
    description: `Our cosmetic dentists have extensive training and experience in aesthetic dentistry, ensuring high-quality and stunning results.`,
    image: chooseImg1,
  },

  {
    id: '2',
    title: 'Advanced Technology',
    description: `We understand that every smile is unique, which is why we tailor our orthodontic treatment plans to address your specific needs and goals, delivering results that exceed your expectations.`,
    image: chooseImg2,
  },
  {
    id: '3',
    title: 'Advanced Technology',
    description: `Our clinic is equipped with state-of-the-art technology, allowing us to deliver precise and effective cosmetic dental treatments.`,
    image: chooseImg3,
  },
  {
    id: '4',
    title: 'Comfortable Environment',
    description: `We strive to create a relaxing and comfortable environment, making your cosmetic dental experience pleasant and stress-free.`,
    image: chooseImg4,
  },
];

// Section When

export const sectionWhen = {
  title: 'Our',
  spanTitle: ' Cosmetic Dental Services',
};

export const sectionWhenList = [
  { id: '1', title: 'Teeth Whitening', icon: whenIcon1 },
  { id: '2', title: 'Dental Bonding', icon: whenIcon2 },
  { id: '3', title: 'Cosmetic Dental Crowns', icon: whenIcon3 },
  { id: '4', title: 'Gum Contouring', icon: whenIcon4 },
];

// DontDelay

export const dontDelay = {
  spanFirst: '',
  middleText: `At`,
  spanSecond: 'EIida Dental Care,',
  endText: `we believe that everyone deserves a smile they can be proud of. Whether you’re looking to brighten, straighten, or completely transform your smile, our cosmetic dental services can help you achieve your goals. Schedule a consultation with our expert team today and take the first step towards a more beautiful and confident you.`,
};
