import { useTranslation } from 'next-i18next';
import { BsMoon, BsSun } from 'react-icons/bs';

import { useTheme } from '@contexts/ThemeContext';

import { Container } from './styles';

const ThemeToggle = () => {
  const { t } = useTranslation('common');
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container
      onClick={toggleTheme}
      title={isDarkMode ? t('enableLightMode') : t('enableDarkMode')}
    >
      {isDarkMode ? <BsSun /> : <BsMoon />}
    </Container>
  );
};

export default ThemeToggle;
