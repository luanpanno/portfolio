import styled from 'styled-components';

export const Container = styled.button`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.muted};
  transition:
    color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.surface};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
