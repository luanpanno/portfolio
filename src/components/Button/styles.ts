import styled, { DefaultTheme, css } from 'styled-components';

type Colors = 'primary' | 'secondary' | 'warning' | 'light';
interface Props {
  color?: Colors;
  outline?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}

function getColors(color: Colors, theme: DefaultTheme) {
  const COLORS = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    light: theme.colors.grey,
    warning: theme.colors.red,
  };

  return COLORS[color];
}

export const Button = css<Props>`
  outline: none;
  padding: 10px 20px;
  border-radius: ${(props) => (props.rounded ? '25px' : '2px')};
  color: white;
  cursor: pointer;
  transition: all 200ms;
`;

export const ButtonOutline = styled.button<Props>`
  ${Button};
  border: 1px solid
    ${(props) => getColors(props.color ?? 'primary', props.theme)};
  color: ${(props) => getColors(props.color ?? 'primary', props.theme)};
  background-color: #fff;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonSolid = styled.button<Props>`
  ${Button};
  background-color: ${(props) =>
    getColors(props.color ?? 'primary', props.theme)};
  border: none;

  &:hover {
    /* background-color: ${(props) => props.theme.colors.primary}; */
    transform: scale(1.08);
  }
`;
