import React from 'react';
import css from './MenuItem.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuItem = ({ item }) => {
  const path = usePathname();

  return (
    <li className={css.linkItem}>
      <Link href={item.link}>{item.title}</Link>
      {/* {item.childrens && <p>Drop menu</p>} */}
      {path === item.link ? <div className={css.activeMenu}></div> : null}
    </li>
  );
};

export default MenuItem;
