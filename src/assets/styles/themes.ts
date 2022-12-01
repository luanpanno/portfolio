type ThemeColors = {
  primary: string;
  light: string;
  secondary: string;
  dark: string;
  background: string;
  grey: string;
  text: string;
  red: string;
};

type Theme = {
  colors: ThemeColors;
};

const base: Theme = {
  colors: {
    primary: '#2BBBED',
    light: '#dbe2ef',
    secondary: '#01ff9f',
    dark: '#001219',
    background: '#fff',
    grey: '#ccc',
    text: '#232323',
    red: '#cc0c59',
  },
};

export const lightTheme: Theme = {
  ...base,
};

export const darkTheme: Theme = {
  ...base,
  colors: {
    ...base.colors,
    background: '#000',
  },
};
