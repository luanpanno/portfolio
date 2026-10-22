export type Theme = {
  mode: 'light' | 'dark';
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    borderStrong: string;
    accent: string;
    onAccent: string;
    danger: string;
    success: string;
  };
};

// Contrast (WCAG): text ≥ 15:1, muted ≥ 4.7:1, accent ≥ 6.6:1 on
// background and surface; borderStrong ≥ 3.3:1 for form controls.
export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#fbfbfa',
    surface: '#f2f2f0',
    text: '#1c1c1b',
    muted: '#6b6b68',
    border: '#e4e4e1',
    borderStrong: '#858581',
    accent: '#2747c7',
    onAccent: '#ffffff',
    danger: '#b42318',
    success: '#1f7a3a',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#121212',
    surface: '#1b1b1b',
    text: '#ededeb',
    muted: '#a3a3a0',
    border: '#272727',
    borderStrong: '#71716e',
    accent: '#93a8ff',
    onAccent: '#121212',
    danger: '#ff8a7a',
    success: '#6fd08c',
  },
};
