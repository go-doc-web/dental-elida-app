import Image from 'next/image';
import css from './page.module.css';
import pages from '@/data/pages';
import Link from 'next/link';
import Banner from '@/compositions/Banner';
import GallaryOfPage from '@/compositions/GallaryOfPage';

export default function Home() {
  return (
    <>
      <Banner />
      <GallaryOfPage />

      {/* <div className={css.root}>
        <section className={css.sectionGallary}>
          <h2 className={`${css.sectionTitle} ${css.visuallyHidden}`}>Our services</h2>
          <ul className={css.wrapper}>
            {pages.map(({ id, title, link, src }) => (
              <li className={css.card} key={id}>
                <Link href={link}>
                  <div>
                    <Image className={css.image} src={src} alt={title} width={160} height={114} />

                    <div className={css.cardBody}>
                      <h3 className={css.cardTitle}>{title}</h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div> */}
    </>
  );
}
