import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import ThemeToggle from '@components/ThemeToggle';

import { useOutsideClick } from '@hooks/useOutsideClick';

import Flags from './Flags';
import HamburgerMenu from './HamburgerMenu';
import NavItem from './NavItem';
import { Container, Menu } from './styles';

const Header = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let frameId: number | null = null;

    const updateIsAtTop = () => {
      frameId = null;
      const nextIsAtTop = window.scrollY === 0;

      setIsAtTop((currentValue) =>
        currentValue === nextIsAtTop ? currentValue : nextIsAtTop,
      );
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateIsAtTop);
    };

    updateIsAtTop();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Container as="header" $isAtTop={isAtTop} $isMenuOpen={isMenuOpen}>
      <div ref={useOutsideClick(() => setIsMenuOpen(false))}>
        <Link href="/" className="logo" aria-label={t('navHome')}>
          Luan Panno
        </Link>

        <Menu
          as="nav"
          id="main-navigation"
          aria-label={t('mainNavigation')}
          $isAtTop={isAtTop}
          $isMenuOpen={isMenuOpen}
        >
          <ul className={isMenuOpen ? 'active' : ''}>
            <NavItem to="#home" onClick={closeMenu}>
              {t('navHome')}
            </NavItem>
            <NavItem to="#projects" onClick={closeMenu}>
              {t('navProjects')}
            </NavItem>
            <NavItem to="#contact" onClick={closeMenu}>
              {t('navContact')}
            </NavItem>
            <li className="menu-actions">
              <Flags />
              <ThemeToggle />
            </li>
          </ul>
        </Menu>

        <HamburgerMenu
          label={t('toggleNavigationMenu')}
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((state) => !state)}
        />
      </div>
    </Container>
  );
};

export default Header;
