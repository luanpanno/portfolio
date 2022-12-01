import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';

import ThemeSwitch from '@components/ThemeSwitch';

import Flags from './Flags';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

type Props = {
  isAtTop: boolean;
};

const Header: React.FC<Props> = ({ isAtTop }) => {
  const { t } = useTranslation('common');
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container isAtTop={isAtTop} openMenu={openMenu}>
      <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
        <Link href="/">
          <a className="logo">Luan Panno</a>
        </Link>

        <Menu isAtTop={isAtTop} openMenu={openMenu}>
          <ul className={openMenu ? 'active' : ''}>
            <NavItem to="#home">{t('navHome')}</NavItem>
            <NavItem to="#projects">{t('navProjects')}</NavItem>
            <NavItem to="#contact">{t('navContact')}</NavItem>
            <Flags />
            <ThemeSwitch />
          </ul>
        </Menu>

        <button
          type="button"
          className="burger"
          onClick={() => setOpenMenu((state) => !state)}
        >
          <FiMenu />
        </button>
      </OutsideClickHandler>
    </Container>
  );
};

export default Header;
