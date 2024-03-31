import css from './page.module.css';

import Banner from '@/compositions/Banner';
import GallaryOfPage from '@/compositions/GallaryOfPage';

export default function Home() {
  console.log('test ficha/ git lesson');
  return (
    <>
      <Banner />
      <GallaryOfPage />
    </>
  );
}
