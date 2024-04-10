import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import close from '@/assets/icons/close.svg';
import dentalGroup from '@/assets/icons/elida-dental-group.svg';
import { menuItems } from '@/config/navMenu';
import Hamburger from '@/componets/Icon/Hamburger';
import CallIcon from '@/componets/Icon/CallIcon';
import Location from '@/componets/Icon/LocationIcon';
import { constans } from '@/constants/const.header';
import removeDashInTelNumber from '@/helpers';
import { useBurgerState } from '@/hooks/useBurgerState';

import Line from '@/componets/Line';

import css from './BurgerMenu.module.css';

const pages = menuItems.filter(item => item.childrens);

const BurgerMenu = () => {
  const path = usePathname();
  const { isOpen, openMenu, closeMenu } = useBurgerState(false);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <button className={css.hamburger} type="button" onClick={openMenu}>
        <Hamburger color={'white'} />
      </button>
      <div className={isOpen ? `${css.menu} ${css.open}` : css.menu}>
        <button className={css.btnClose} type="button" onClick={closeMenu}>
          <Image
            src={close}
            alt={'close'}
            width={14}
            height={14}
            className={css.closeIcon}
            priority={true}
          />
        </button>

        <div className={css.wrapperMenu}>
          <ul className={css.navList}>
            <li className={css.listItem}>
              <a className={css.itemLink} href="/" onClick={handleLinkClick}>
                Home
                {path === '/' ? <div className={css.activeMenu}></div> : null}
              </a>
            </li>
            {pages[0]?.childrens.map(item => {
              return (
                <li className={css.listItem} key={item.id}>
                  <a className={css.itemLink} href={item.link} onClick={handleLinkClick}>
                    {item.title}
                    {path === item.link ? <div className={css.activeMenu}></div> : null}
                  </a>
                </li>
              );
            })}
          </ul>
          <Line className={css.line} />
          <div className={css.thumbImage}>
            <Image
              src={dentalGroup}
              alt={'close'}
              width={133}
              height={39}
              className={css.closeIcon}
              priority={true}
            />
          </div>
          <div className={css.wrapper}>
            <div className={css.wrapperTel}>
              <CallIcon />
              <a className={css.linkTel} href={`tel:${removeDashInTelNumber(constans.numberTel)}`}>
                {constans.numberTel}
              </a>
            </div>
            <div className={css.wrapperAddress}>
              <Location />
              <a className={css.linkAddress} href={'#'}>
                {constans.location}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
