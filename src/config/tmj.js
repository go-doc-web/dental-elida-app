//TODO Change img/jpg in production
import chooseImg1 from '@/assets/images/img_13.jpg';
import chooseImg2 from '@/assets/images/img_15.jpg';
import chooseImg3 from '@/assets/images/img_14.jpg';
import chooseImg4 from '@/assets/images/img_20.jpg';

export const hero = {
  title: 'TMJ',
  spanTitle1: 'Services',
  spanTitle2: 'at Elida Dental Care',
  description: `Welcome to Elida Dental Care, where we specialize in diagnosing and treating temporomandibular joint (TMJ) disorders. Our dedicated team of dental professionals is committed to providing effective solutions to alleviate your jaw pain and improve your quality of life.`,
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
    description: `Our team of dental professionals has extensive experience in diagnosing and treating TMJ disorders, ensuring you receive the highest level of care.`,
    image: chooseImg1,
  },

  {
    id: '2',
    title: 'Comprehensive Approach',
    description: `
      We take a holistic approach to TMJ treatment, addressing both the symptoms and the underlying causes to provide long-lasting relief.
      `,
    image: chooseImg2,
  },
  {
    id: '3',
    title: 'State-of-the-Art Technology',
    description: `Our clinic is equipped with the latest diagnostic and treatment technology, allowing us to deliver precise and effective TMJ care.`,
    image: chooseImg3,
  },
  {
    id: '4',
    title: 'Patient-Centered Care',
    description: `Your comfort and well-being are our top priorities. We take the time to listen to your concerns, answer your questions, and provide compassionate care throughout your treatment journey.`,
    image: chooseImg4,
  },
];

export const sectionServises = [
  {
    id: '1',
    title: `Comprehensive TMJ Evaluation`,
    description: `Our TMJ evaluation begins with a thorough examination of your jaw, bite, and facial muscles. We use advanced diagnostic tools, including digital imaging and 3D scans, to accurately identify the underlying causes of your TMJ disorder.`,
  },
  {
    id: '2',
    title: `Customized Treatment Plans`,
    description: `Understanding that TMJ disorders vary from person to person, we develop personalized treatment plans tailored to your specific condition and symptoms. Our goal is to provide targeted and effective relief for your TMJ pain.`,
  },
  {
    id: '3',
    title: `Non-Surgical Treatment`,
    description: `We offer a range of non-surgical treatments designed to alleviate TMJ symptoms and restore normal jaw function. These treatments may include:`,
    nestedList: [
      {
        id: '1',
        text: `Oral Splints and Mouthguards: Custom-fitted devices to reduce jaw strain and prevent teeth grinding.`,
      },
      {
        id: '2',
        text: `Physical Therapy: Exercises and techniques to strengthen jaw muscles and improve mobility.`,
      },
      {
        id: '3',
        text: `Medications: Prescription medications to manage pain and inflammation associated with TMJ disorders.`,
      },
    ],
  },
  {
    id: '4',
    title: `Minimally Invasive Procedures`,
    description: `For patients with more severe TMJ disorders, we offer minimally invasive proceduressuch as:`,
    nestedList: [
      {
        id: '1',
        text: `Trigger Point Injections: Injections to relieve muscle tension and reduce pain.`,
      },
      {
        id: '2',
        text: `Arthrocentesis: A procedure to flush out the TMJ joint and reduce inflammation.`,
      },
    ],
  },
];

// DontDelay

export const dontDelay = {
  spanFirst: "Don't let",
  middleText: `TMJ pain disrupt your life. At`,
  spanSecond: 'EIida Dental Care,',
  endText: `we're here to help you find relief and restore your jaw function. Schedule a consultation with our TMJ specialists today and take the first step towards a pain-free future.`,
};
