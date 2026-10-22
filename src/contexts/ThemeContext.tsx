import { createContext, useContext, useSyncExternalStore } from 'react';

import { darkTheme, lightTheme, Theme } from '@assets/styles/theme';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_STORAGE_KEY = 'theme';
const THEME_CHANGE_EVENT = 'theme-change';
const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const readStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
};

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = readStoredTheme();

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia(DARK_SCHEME_QUERY).matches ? 'dark' : 'light';
};

const subscribeToTheme = (callback: () => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleChange = () => callback();
  const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY);

  window.addEventListener('storage', handleChange);
  window.addEventListener(THEME_CHANGE_EVENT, handleChange);
  mediaQuery.addEventListener('change', handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(THEME_CHANGE_EVENT, handleChange);
    mediaQuery.removeEventListener('change', handleChange);
  };
};

const getThemeSnapshot = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return getStoredTheme() === 'dark';
};

const getServerThemeSnapshot = () => false;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const toggleTheme = () => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'light' : 'dark');
    } catch {
      return;
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
