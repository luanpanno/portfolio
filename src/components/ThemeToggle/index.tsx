import { useTranslation } from 'next-i18next';

import { MoonIcon, SunIcon } from '@components/Icons';

import { useTheme } from '@contexts/ThemeContext';

import { Container } from './styles';

const ThemeToggle = () => {
  const { t } = useTranslation('common');
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? t('enableLightMode') : t('enableDarkMode')}
      title={isDarkMode ? t('enableLightMode') : t('enableDarkMode')}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </Container>
  );
};

export default ThemeToggle;
