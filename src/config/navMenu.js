import main1 from '../assets/images/img_1.jpg';
import main2 from '../assets/images/img_2.jpg';
import main3 from '../assets/images/img_3.jpg';
import main4 from '../assets/images/img_4.jpg';
import main5 from '../assets/images/img_5.jpg';
import main6 from '../assets/images/img_6.jpg';
import main7 from '../assets/images/img_7.png';
import main8 from '../assets/images/img_8.jpg';
import main9 from '../assets/images/img_9.jpg';
import main10 from '../assets/images/img_10.jpg';
import main11 from '../assets/images/img_11.jpg';
import main12 from '../assets/images/img_12.jpg';

export const pages = [
  {
    id: '1',
    title: 'Oral Surgery',
    link: '/oral-surgery',
    src: main1,
  },
  {
    id: '2',
    title: 'Endodontist',
    link: '/endodontist',
    src: main2,
  },
  {
    id: '3',
    title: 'Periodontist',
    link: '/periodontist',
    src: main3,
  },
  {
    id: '4',
    title: 'Urgent Dental Care',
    link: '/urgent-dental-care',
    src: main4,
  },
  {
    id: '5',
    title: 'Pediatric',
    link: '/pediatric',
    src: main5,
  },
  {
    id: '6',
    title: 'Orthodontist',
    link: '/orthodontist',
    src: main6,
  },
  {
    id: '7',
    title: 'TMJ',
    link: '/tmj',
    src: main7,
  },
  {
    id: '8',
    title: 'Cosmetic Dentist',
    link: '/cosmetic-dentist',
    src: main8,
  },
  {
    id: '9',
    title: 'Dentures / Bridges',
    link: '/dentures-bridges',
    src: main9,
  },
  {
    id: '10',
    title: 'Implants',
    link: '/implants',
    src: main10,
  },

  {
    id: '11',
    title: 'Insurances',
    link: '/insurances',
    src: main11,
  },
  {
    id: '12',
    title: 'Reviews',
    link: '/reviews',
    src: main12,
  },
];

export const menuItems = [
  {
    id: '1',
    title: 'Home',
    link: '/',
    priority: '',
  },
  {
    id: '2',
    title: 'Dental Services',
    link: '#',
    whisChildrens: true,
    childrens: pages,
  },
  { id: '3', title: 'Reviews', link: '/reviews' },
  { id: '4', title: 'Insurances', link: '/insurances' },
];

// menu.filter((item)=>item.priority===2)
