import React from 'react';
import Toggle from 'react-toggle';

import { useTheme } from '@contexts/ThemeContext';

const ThemeSwitch = () => {
  const { selectedTheme, handleThemeChange } = useTheme();

  return (
    <label>
      <Toggle
        defaultChecked={selectedTheme === 'dark'}
        icons={false}
        onChange={() =>
          handleThemeChange(selectedTheme === 'dark' ? 'light' : 'dark')
        }
      />
    </label>
  );
};

export default ThemeSwitch;
