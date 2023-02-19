import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import Flags from './Flags';
import HamburgerMenu from './HamburgerMenu';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

type Props = {
  isInTop: boolean;
};

const Header: React.FC<Props> = ({ isInTop }) => {
  const { t } = useTranslation('common');
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container isInTop={isInTop} openMenu={openMenu}>
      <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
        <Link href="/" className="logo">
          Luan Panno
        </Link>

        <Menu isInTop={isInTop} openMenu={openMenu}>
          <ul className={openMenu ? 'active' : ''}>
            <NavItem to="#home">{t('navHome')}</NavItem>
            <NavItem to="#projects">{t('navProjects')}</NavItem>
            <NavItem to="#contact">{t('navContact')}</NavItem>
            <li>
              <Flags />
            </li>
          </ul>
        </Menu>

        <HamburgerMenu
          isMenuOpen={openMenu}
          onClick={() => setOpenMenu((state) => !state)}
        />
      </OutsideClickHandler>
    </Container>
  );
};

export default Header;
