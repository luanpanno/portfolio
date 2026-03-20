export type Theme = {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    primarySoft: string;
    light: string;
    background: string;
    backgroundAlt: string;
    surface: string;
    surfaceElevated: string;
    surfaceAccent: string;
    text: string;
    mutedText: string;
    lightText: string;
    red: string;
    green: string;
    yellow: string;
    title: string;
    border: string;
    borderStrong: string;
    shadow: string;
    shadowStrong: string;
  };
};

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#236a5b',
    primarySoft: 'rgba(35, 106, 91, 0.12)',
    light: 'rgba(17, 24, 28, 0.08)',
    background: '#f7f2ea',
    backgroundAlt: '#efe7db',
    surface: 'rgba(255, 255, 255, 0.74)',
    surfaceElevated: '#fffdf9',
    surfaceAccent: '#f1ebe2',
    text: '#1b242a',
    mutedText: '#5c686f',
    lightText: '#6f7a81',
    red: '#c85e4c',
    green: '#2b876d',
    yellow: '#c69a3d',
    title: '#11181c',
    border: 'rgba(17, 24, 28, 0.10)',
    borderStrong: 'rgba(17, 24, 28, 0.18)',
    shadow: '0 24px 60px rgba(15, 23, 27, 0.08)',
    shadowStrong: '0 34px 90px rgba(15, 23, 27, 0.14)',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#8dd8c7',
    primarySoft: 'rgba(141, 216, 199, 0.16)',
    light: 'rgba(196, 209, 218, 0.12)',
    background: '#0d1419',
    backgroundAlt: '#121c22',
    surface: 'rgba(17, 25, 33, 0.78)',
    surfaceElevated: '#18222b',
    surfaceAccent: '#21303a',
    text: '#edf2f4',
    mutedText: '#c3ccd2',
    lightText: '#9aa7b1',
    red: '#ff8b78',
    green: '#3ac79a',
    yellow: '#f1c56f',
    title: '#ffffff',
    border: 'rgba(196, 209, 218, 0.12)',
    borderStrong: 'rgba(196, 209, 218, 0.20)',
    shadow: '0 24px 70px rgba(0, 0, 0, 0.34)',
    shadowStrong: '0 34px 90px rgba(0, 0, 0, 0.46)',
  },
};

export const defaultTheme = lightTheme;
export const theme = lightTheme;
