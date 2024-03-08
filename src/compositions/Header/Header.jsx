'use client';

import useViewportWidth from '@/hooks/widtch';
import Image from 'next/image';
import clsx from 'clsx';

import Menu from './componets/Menu';
import AddressPanel from './componets/AddressPanel';
import Container from '@/componets/Container';
import Button from '@/componets/Button';
import Hamburger from '@/componets/Icon/Hamburger';
import * as menu from '@/config/navMenu';
import css from './Header.module.css';

const cn = clsx;

// const menu = [
//   { id: "1", title: "Home", link: "/" },
//   { id: "2", title: "Dental Services", link: "/dental-services" },
//   { id: "3", title: "Reviews", link: "/reviews" },
//   { id: "4", title: "Insurances", link: "/insurances" },
// ];

const stylesBtn = {
  cursor: 'pointer',
};

const white = '#fff';
const Header = () => {
  // const [isShowBurgerIcon, setIsShowBurgerIcon] = useState(false);
  const viewportWidth = useViewportWidth();

  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.wrapperMenu}>
            {viewportWidth < 768 && (
              <Button
                callback={() => console.log('Hello')}
                icon={<Hamburger color={'white'} />}
                externalStyles={stylesBtn}
              ></Button>
            )}
            {viewportWidth >= 768 && <Menu menu={menu.mainMenu} />}

            <AddressPanel />
          </div>

          {/*  сделать компонентом */}
        </Container>
      </header>
    </>
  );
};

export default Header;
