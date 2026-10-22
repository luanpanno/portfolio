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

// Light: soft cool "mist" background. Contrast (WCAG) on background and
// surface: text ≥ 14:1, muted ≥ 5:1, accent ≥ 5.9:1, borderStrong ≥ 3.4:1.
export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#eceff3',
    surface: '#e1e6ec',
    text: '#15181d',
    muted: '#56606c',
    border: '#d5dbe2',
    borderStrong: '#717b88',
    accent: '#2747c7',
    onAccent: '#ffffff',
    danger: '#b42318',
    success: '#1a6a33',
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
