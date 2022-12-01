import { theme } from '../assets/styles/themes';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}
