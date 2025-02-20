export type Theme = {
  colors: {
    primary: string;
    light: string;
    background: string;
    text: string;
    lightText: string;
    red: string;
    green: string;
    yellow: string;
    title: string;
  };
};

export const defaultTheme: Theme = {
  colors: {
    primary: '#1f9cf0',
    light: '#dbe2ef',
    background: '#fff',
    text: '#232323',
    lightText: '#aaaaaa',
    red: '#ff3333',
    green: '#28a745',
    yellow: '#ffc107',
    title: '#333333',
  },
};

export const lightTheme: Theme = {
  ...defaultTheme,
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    light: '#3a3a3a',
    background: '#1a1a1a',
    text: '#ffffff',
    title: '#ffffff',
  },
};
