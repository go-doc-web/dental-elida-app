import React from 'react';
import css from './MenuItem.module.css';
import Link from 'next/link';

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <li className={css.linkItem}>
      <Link href={item.link}>{item.title}</Link>
      {/* {item.childrens && <p>Drop menu</p>} */}
    </li>
  );
};

export default MenuItem;
