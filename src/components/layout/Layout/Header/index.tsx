import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import Flags from './Flags';
import HamburgerMenu from './HamburgerMenu';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

type Props = {
  isAtTop: boolean;
};

const Header: React.FC<Props> = ({ isAtTop }) => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container $isAtTop={isAtTop} $isMenuOpen={isMenuOpen}>
      <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
        <Link href="/" className="logo">
          Luan Panno
        </Link>

        <Menu $isAtTop={isAtTop} $isMenuOpen={isMenuOpen}>
          <ul className={isMenuOpen ? 'active' : ''}>
            <NavItem to="#home">{t('navHome')}</NavItem>
            <NavItem to="#projects">{t('navProjects')}</NavItem>
            <NavItem to="#contact">{t('navContact')}</NavItem>
            <li>
              <Flags />
            </li>
          </ul>
        </Menu>

        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((state) => !state)}
        />
      </OutsideClickHandler>
    </Container>
  );
};

export default Header;
