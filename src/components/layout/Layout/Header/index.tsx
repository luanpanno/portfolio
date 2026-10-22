import { useTranslation } from 'next-i18next';

import LanguageSwitch from '@components/LanguageSwitch';
import ThemeToggle from '@components/ThemeToggle';

import { Actions, Container, Nav } from './styles';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Nav aria-label={t('mainNavigation')}>
        <ul>
          <li>
            <a href="#work">{t('navWork')}</a>
          </li>
          <li>
            <a href="#contact">{t('navContact')}</a>
          </li>
        </ul>
      </Nav>

      <Actions>
        <LanguageSwitch />
        <ThemeToggle />
      </Actions>
    </Container>
  );
};

export default Header;
