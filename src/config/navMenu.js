export const pages = [
  {
    id: '1',
    title: 'Oral Surgery',
    link: '/oral-surgery',
    src: '/img/main/img_1.jpg',
  },
  {
    id: '2',
    title: 'Endodontist',
    link: '/endodontist',
    src: '/img/main/img_2.jpg',
  },
  {
    id: '3',
    title: 'Periodontist',
    link: '/periodontist',
    src: '/img/main/img_3.jpg',
  },
  {
    id: '4',
    title: 'Urgent Dental Care',
    link: '/urgent-dental-care',
    src: '/img/main/img_4.jpg',
  },
  {
    id: '5',
    title: 'Pediatric',
    link: '/pediatric',
    src: '/img/main/img_5.jpg',
  },
  {
    id: '6',
    title: 'Orthodontist',
    link: '/orthodontist',
    src: '/img/main/img_6.jpg',
  },
  {
    id: '7',
    title: 'TMJ',
    link: '/tmj',
    src: '/img/main/img_7.jpg',
  },
  {
    id: '8',
    title: 'Cosmetic Dentist',
    link: '/cosmetic-dentist',
    src: '/img/main/img_8.jpg',
  },
  {
    id: '9',
    title: 'Dentures / Bridges',
    link: '/dentures-bridges',
    src: '/img/main/img_9.jpg',
  },
  {
    id: '10',
    title: 'Implants',
    link: '/implants',
    src: '/img/main/img_10.jpg',
  },

  {
    id: '11',
    title: 'Insurances',
    link: '/insurances',
    src: '/img/main/img_11.jpg',
  },
  {
    id: '12',
    title: 'Reviews',
    link: '/reviews',
    src: '/img/main/img_12.jpg',
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
