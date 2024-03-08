import Image from 'next/image';
import css from './page.module.css';
import pages from '@/data/pages';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className={css.sectionGallary}>
        {/* сделать компонент */}
        <h2 className={`${css.sectionTitle} ${css.visuallyHidden}`}>Our services</h2>
        <ul className={css.wrapper}>
          {pages.map(({ id, title, link, src }) => (
            <li key={id}>
              <Link href={link}>
                <div className={css.Card}>
                  <Image className={css.image} src={src} alt={title} width={230} height={164} />

                  <h3 className={css.cardTitle}>{title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
