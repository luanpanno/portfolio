import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

import Flags from './Flags';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

interface Props {
  isInTop: boolean;
}

const Header: React.FC<Props> = ({ isInTop }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container isInTop={isInTop} openMenu={openMenu}>
      <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
        <Link to="/" className="logo">
          Luan Panno
        </Link>

        <Menu isInTop={isInTop} openMenu={openMenu}>
          <ul className={openMenu ? 'active' : ''}>
            <NavItem to="#home">{t('Home')}</NavItem>
            <NavItem to="#experience">{t('Experience')}</NavItem>
            <NavItem to="#projects">{t('Projects')}</NavItem>
            <NavItem to="#contact">{t('Contact')}</NavItem>
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
