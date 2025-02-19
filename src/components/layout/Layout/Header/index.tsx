import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ThemeToggle from '@components/ThemeToggle';

import Flags from './Flags';
import HamburgerMenu from './HamburgerMenu';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

const Header = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    setIsAtTop(document.querySelector('html').scrollTop === 0);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isAtTop={isAtTop} isMenuOpen={isMenuOpen}>
      <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
        <Link href="/" className="logo">
          Luan Panno
        </Link>

        <Menu isAtTop={isAtTop} isMenuOpen={isMenuOpen}>
          <ul className={isMenuOpen ? 'active' : ''}>
            <NavItem to="#home">{t('navHome')}</NavItem>
            <NavItem to="#projects">{t('navProjects')}</NavItem>
            <NavItem to="#contact">{t('navContact')}</NavItem>
            <li>
              <Flags />
            </li>
            <li>
              <ThemeToggle />
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
