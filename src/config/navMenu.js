export const pages = [
  {
    id: '1',
    title: 'Oral Surgery',
    link: '/oral-surgery',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '2',
    title: 'Endodontist',
    link: '/endodontist',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '3',
    title: 'Periodontist',
    link: '/periodontist',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '4',
    title: 'Urgent Dental Care',
    link: '/urgent-dental-care',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '5',
    title: 'Pediatrics',
    link: '/pediatrics',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '6',
    title: 'Orthodontist',
    link: '/orthodontist',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '7',
    title: 'TMJ',
    link: '/tmj',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '8',
    title: 'Cosmetic Dentist',
    link: '/cosmetic-dentist',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '9',
    title: 'Dentures / Bridges',
    link: '/dentures-bridges',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '10',
    title: 'Implants',
    link: '/implants',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '11',
    title: 'Reviews',
    link: '/reviews',
    src: '/img/hero/img_1.jpg',
  },
  {
    id: '12',
    title: 'Insurances',
    link: '/insurances',
    src: '/img/hero/img_1.jpg',
  },
];

export const mainMenu = [
  {
    id: '1',
    title: 'Home',
    link: '/',
    priority: '',
  },
  {
    id: '2',
    title: 'Dental Services',
    link: '/dental-services',
    whisChildrens: true,
    childrens: pages,
  },
  { id: '3', title: 'Reviews', link: '/reviews' },
  { id: '4', title: 'Insurances', link: '/insurances' },
];

// menu.filter((item)=>item.priority===2)
