import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';

import Flags from './Flags';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

type Props = {
  isInTop: boolean;
};

const Header: React.FC<Props> = ({ isInTop }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container isInTop={isInTop} openMenu={openMenu}>
      <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
        <Link href="/">
          <a className="logo">Luan Panno</a>
        </Link>

        <Menu isInTop={isInTop} openMenu={openMenu}>
          <ul className={openMenu ? 'active' : ''}>
            <NavItem to="#home">{t('navHome')}</NavItem>
            <NavItem to="#projects">{t('navProjects')}</NavItem>
            <NavItem to="#contact">{t('navContact')}</NavItem>
            <Flags />
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
