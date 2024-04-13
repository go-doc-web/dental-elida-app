import { useState, useEffect } from 'react';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

import DropDown from '@/assets/icons/arrow-drop-down.svg';
import DropUp from '@/assets/icons/arrow-drop-up.svg';
import css from './MenuItem.module.css';
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (item.link !== path) {
      setIsOpen(false);
    }
  }, [item.link, path]);

  return (
    <li onClick={item.childrens ? handleClick : null} className={css.item}>
      <div className={css.wrapperLink}>
        <a className={css.itemLink} href={item.link}>
          {item.title}
        </a>
        {item.childrens && !isOpen && (
          <Image
            src={DropDown}
            alt={'DropDown'}
            width={16}
            height={16}
            className={css.logo}
            priority={true}
          />
        )}
        {item.childrens && isOpen && (
          <Image
            src={DropUp}
            alt={'DropUp'}
            width={16}
            height={16}
            className={css.logo}
            priority={true}
          />
        )}
      </div>
      {item.childrens && (
        <ul className={isOpen ? `${css.dropdownMenu} ${css.active}` : `${css.dropdownMenu} `}>
          {item.childrens.map((child, index) => (
            <li className={css.childItem} key={index}>
              <a className={css.childLink} href={child.link}>
                {child.title}
                {path === child.link ? <div className={css.activeMenuDrop}></div> : null}
              </a>
            </li>
          ))}
        </ul>
      )}
      {path === item.link ? <div className={css.activeMenu}></div> : null}
    </li>
  );
};

export default MenuItem;
