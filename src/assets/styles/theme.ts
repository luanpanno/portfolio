export type Theme = {
  colors: {
    primary: string;
    light: string;
    background: string;
    text: string;
    red: string;
    title: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    primary: '#1f9cf0',
    light: '#dbe2ef',
    background: '#fff',
    text: '#232323',
    red: '#ff3333',
    title: '#333333',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#1f9cf0',
    light: '#3a3a3a',
    background: '#1a1a1a',
    text: '#ffffff',
    red: '#ff3333',
    title: '#ffffff',
  },
};
