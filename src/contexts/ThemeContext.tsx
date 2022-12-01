import React, { createContext, useContext, useState } from 'react';

type AvailableThemes = 'light' | 'dark';

type Context = {
  selectedTheme: AvailableThemes;
  handleThemeChange: (theme: AvailableThemes) => void;
};

export const ThemeContext = createContext<Context>({} as Context);

export const ThemeProvider: React.FC = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<AvailableThemes>('dark');

  const handleThemeChange = (theme: AvailableThemes) => setSelectedTheme(theme);

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
