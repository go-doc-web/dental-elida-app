import css from './page.module.css';
import ReviewsList from '@/compositions/Reviews/ReviewsList';
import Banner from '@/compositions/Banner';
import GallaryOfPage from '@/compositions/GallaryOfPage';

export default function Home() {
  return (
    <>
      <Banner />
      <GallaryOfPage />
    </>
  );
}
